import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18n from "./Translate/i18n.jsx"
function forceLandscape() {
  if (window.innerWidth < 900) {
    if (window.screen.orientation !== 90 && window.screen.orientation !== -90) {
     
      screen.orientation.lock('landscape').catch(function (error) {
        console.error('Could not lock orientation: ', error);
      });
    }
  }
}

window.addEventListener('load', forceLandscape);
window.addEventListener('resize', forceLandscape)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
)
