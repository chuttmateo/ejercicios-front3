import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Clase4 from './ejercicios/ejercicio-clase-4/Clase4'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode> {//Saqué esto porque en la consola carga dos veces las cosas y se hace dificil de leer.
  }
  <>
  <Clase4 />
  </>
    
  </React.StrictMode>,
)
