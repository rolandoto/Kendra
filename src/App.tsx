import { useState, useEffect } from 'react'
import './App.css'

const REDIRECT_URL = 'https://t.me/+ADLp9Oof5lIyZGQx'
const REDIRECT_DELAY_MS = 1000 // 3 segundos

function App() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const startTime = Date.now()

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const pct = Math.min((elapsed / REDIRECT_DELAY_MS) * 100, 100)
      setProgress(pct)

      if (elapsed >= REDIRECT_DELAY_MS) {
        clearInterval(interval)
        window.location.href = REDIRECT_URL
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="loading-screen">
      <div className="spinner" />
      <p>Redirecionando, aguarde...</p>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  )
}

export default App