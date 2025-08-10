import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="dark"> {/* включаем dark-класс по умолчанию */}
      <App />
    </div>
  </React.StrictMode>
)
