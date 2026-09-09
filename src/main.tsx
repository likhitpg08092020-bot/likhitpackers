import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './globals.css' // Import the global styles

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={(import.meta.env as any).VITE_BASE_PATH || '/'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
