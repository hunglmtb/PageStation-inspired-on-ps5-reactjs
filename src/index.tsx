import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootElement: any = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
