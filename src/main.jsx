import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Footer } from "./components/Footer";
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App className="app"/>
    <Footer></Footer>
  </React.StrictMode>
)
