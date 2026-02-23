interface HomeScreenProps {
  state: {
    images: any[]
    settings: {
      quality: number
      maxWidth: number
      format: string
    }
  }
  setState: any
  onStart: () => void
}

export function HomeScreen({ state, setState, onStart }: HomeScreenProps) {
  const totalSaved = state.images
    .filter(img => img.status === 'done')
    .reduce((sum, img) => sum + (img.originalSize - img.optimizedSize), 0)

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
  }

  return (
    <div className="home-screen">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">🖼️</span>
          <h1>Image Optimizer</h1>
        </div>
        <p className="tagline">Compress & optimize images for better performance</p>
      </header>

      <div className="stats">
        <div className="stat-card">
          <div className="stat-value">{state.images.length}</div>
          <div className="stat-label">Images</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{state.images.filter(i => i.status === 'done').length}</div>
          <div className="stat-label">Optimized</div>
        </div>
        <div className="stat-card">
          <div className="stat-value highlight">{formatBytes(totalSaved)}</div>
          <div className="stat-label">Saved</div>
        </div>
      </div>

      <div className="settings-preview">
        <h2>Current Settings</h2>
        <div className="setting-items">
          <div className="setting-item">
            <span className="setting-label">Quality</span>
            <span className="setting-value">{state.settings.quality}%</span>
          </div>
          <div className="setting-item">
            <span className="setting-label">Max Width</span>
            <span className="setting-value">{state.settings.maxWidth}px</span>
          </div>
          <div className="setting-item">
            <span className="setting-label">Format</span>
            <span className="setting-value">{state.settings.format.toUpperCase()}</span>
          </div>
        </div>
      </div>

      <div className="features">
        <h2>Features</h2>
        <ul>
          <li>⚡ Batch optimize multiple images</li>
          <li>🎨 Convert to WebP, JPEG, or PNG</li>
          <li>📐 Resize to max dimensions</li>
          <li>📊 See before/after file sizes</li>
          <li>🔄 Lossy & lossless compression</li>
        </ul>
      </div>

      <div className="actions">
        <button className="primary-btn" onClick={onStart}>
          Start Optimizing
        </button>
      </div>
    </div>
  )
}
