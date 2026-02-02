/**
 * Punto de entrada de la aplicación React.
 * Renderiza la aplicación dentro del root del HTML usando React 18.
 * Incluye el router y un enlace accesible para saltar al contenido principal.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './assets/styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-700 text-white px-4 py-2 rounded z-50"
    >
      Saltar al contenido principal
    </a>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </StrictMode>,
)
