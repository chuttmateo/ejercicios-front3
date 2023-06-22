import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Clase from './ejercicios/ejercicio-clase-19/Clase'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,
  //<Clase />
  <BrowserRouter>
  <Clase/>
  </BrowserRouter>
)
