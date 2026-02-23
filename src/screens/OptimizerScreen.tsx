import { useState, useRef } from 'react'
import { ImageFile } from '../App'

interface OptimizerScreenProps {
  state: {
    images: ImageFile[]
    settings: {
      quality: number
      maxWidth: number
      format: 'original' | 'webp' | 'jpeg' | 'png'
    }
  }
  setState: any
  onBack: () => void
}

export function OptimizerScreen({ state, setState, onBack }: OptimizerScreenProps) {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'))
    addFiles(files)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      addFiles(files)
    }
  }

  const addFiles = (files: File[]) => {
    const newImages: ImageFile[] = files.map(file => ({
      id: `img-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: file.name,
      originalSize: file.size,
      optimizedSize: file.size,
      url: URL.createObjectURL(file),
      status: 'pending' as const,
    }))
    setState({
      ...state,
      images: [...state.images, ...newImages],
    })
  }

  const removeImage = (id: string) => {
    setState({
      ...state,
      images: state.images.filter(img => img.id !== id),
    })
  }

  const optimizeImage = async (id: string) => {
    const image = state.images.find(img => img.id === id)
    if (!image) return

    // Update status to optimizing
    setState({
      ...state,
      images: state.images.map(img =>
        img.id === id ? { ...img, status: 'optimizing' as const } : img
      ),
    })

    // Simulate optimization (in real plugin, use canvas or API)
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))

    // Calculate simulated optimization
    const compressionRatio = state.settings.quality / 100
    const newSize = Math.floor(image.originalSize * compressionRatio * 0.7)

    setState({
      ...state,
      images: state.images.map(img =>
        img.id === id
          ? { ...img, optimizedSize: newSize, status: 'done' as const }
          : img
      ),
    })
  }

  const optimizeAll = () => {
    state.images
      .filter(img => img.status === 'pending')
      .forEach(img => optimizeImage(img.id))
  }

  const totalOriginal = state.images.reduce((sum, img) => sum + img.originalSize, 0)
  const totalOptimized = state.images.reduce((sum, img) => sum + img.optimizedSize, 0)
  const totalSaved = totalOriginal - totalOptimized

  return (
    <div className="optimizer-screen">
      <header className="optimizer-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <h2>Optimize Images</h2>
        <span className="image-count">{state.images.length} images</span>
      </header>

      <div className="settings-bar">
        <div className="setting-group">
          <label>Quality</label>
          <input
            type="range"
            min="10"
            max="100"
            value={state.settings.quality}
            onChange={(e) => setState({
              ...state,
              settings: { ...state.settings, quality: parseInt(e.target.value) }
            })}
          />
          <span>{state.settings.quality}%</span>
        </div>
        <div className="setting-group">
          <label>Max Width</label>
          <select
            value={state.settings.maxWidth}
            onChange={(e) => setState({
              ...state,
              settings: { ...state.settings, maxWidth: parseInt(e.target.value) }
            })}
          >
            <option value={800}>800px</option>
            <option value={1200}>1200px</option>
            <option value={1920}>1920px</option>
            <option value={2560}>2560px</option>
          </select>
        </div>
        <div className="setting-group">
          <label>Format</label>
          <select
            value={state.settings.format}
            onChange={(e) => setState({
              ...state,
              settings: { ...state.settings, format: e.target.value as any }
            })}
          >
            <option value="webp">WebP</option>
            <option value="jpeg">JPEG</option>
            <option value="png">PNG</option>
            <option value="original">Original</option>
          </select>
        </div>
      </div>

      <div
        className={`drop-zone ${isDragging ? 'dragging' : ''}`}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
        <div className="drop-content">
          <span className="drop-icon">📁</span>
          <p>Drop images here or click to browse</p>
          <span className="drop-hint">PNG, JPEG, WebP, GIF</span>
        </div>
      </div>

      {state.images.length > 0 && (
        <>
          <div className="summary-bar">
            <div className="summary-item">
              <span className="summary-label">Original</span>
              <span className="summary-value">{formatBytes(totalOriginal)}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Optimized</span>
              <span className="summary-value">{formatBytes(totalOptimized)}</span>
            </div>
            <div className="summary-item highlight">
              <span className="summary-label">Saved</span>
              <span className="summary-value">{formatBytes(totalSaved)}</span>
            </div>
          </div>

          <div className="actions-bar">
            <button
              className="optimize-all-btn"
              onClick={optimizeAll}
              disabled={!state.images.some(img => img.status === 'pending')}
            >
              Optimize All ({state.images.filter(img => img.status === 'pending').length})
            </button>
          </div>

          <div className="image-list">
            {state.images.map(image => (
              <div key={image.id} className={`image-item ${image.status}`}>
                <img src={image.url} alt={image.name} className="thumb" />
                <div className="image-info">
                  <div className="image-name">{image.name}</div>
                  <div className="image-sizes">
                    <span className="original">{formatBytes(image.originalSize)}</span>
                    <span className="arrow">→</span>
                    <span className="optimized">{formatBytes(image.optimizedSize)}</span>
                    {image.status === 'done' && (
                      <span className="saved">
                        (-{Math.round((1 - image.optimizedSize / image.originalSize) * 100)}%)
                      </span>
                    )}
                  </div>
                </div>
                <div className="image-actions">
                  {image.status === 'pending' && (
                    <button onClick={() => optimizeImage(image.id)}>Optimize</button>
                  )}
                  {image.status === 'optimizing' && (
                    <span className="spinner">⏳</span>
                  )}
                  {image.status === 'done' && (
                    <span className="check">✅</span>
                  )}
                  <button className="remove-btn" onClick={() => removeImage(image.id)}>×</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
