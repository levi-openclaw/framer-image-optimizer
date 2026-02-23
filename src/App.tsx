import { useState } from 'react'
import { HomeScreen } from './screens/HomeScreen'
import { OptimizerScreen } from './screens/OptimizerScreen'

export type ImageFile = {
  id: string
  name: string
  originalSize: number
  optimizedSize: number
  url: string
  status: 'pending' | 'optimizing' | 'done' | 'error'
}

export type AppState = {
  images: ImageFile[]
  settings: {
    quality: number
    maxWidth: number
    format: 'original' | 'webp' | 'jpeg' | 'png'
  }
}

export function App() {
  const [screen, setScreen] = useState<'home' | 'optimizer'>('home')
  const [state, setState] = useState<AppState>({
    images: [],
    settings: {
      quality: 80,
      maxWidth: 1920,
      format: 'webp',
    },
  })

  return (
    <div className="app">
      {screen === 'home' ? (
        <HomeScreen 
          state={state} 
          setState={setState} 
          onStart={() => setScreen('optimizer')} 
        />
      ) : (
        <OptimizerScreen 
          state={state} 
          setState={setState} 
          onBack={() => setScreen('home')} 
        />
      )}
    </div>
  )
}
