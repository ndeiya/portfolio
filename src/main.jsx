import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './App.css'

const redirectedPath = sessionStorage.getItem('portfolio-path')
if (redirectedPath) {
  sessionStorage.removeItem('portfolio-path')
  window.history.replaceState(null, '', redirectedPath)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider><App /></HelmetProvider>
  </React.StrictMode>,
)
