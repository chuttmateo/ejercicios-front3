import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Clase3 from './ejercicios/ejercicio-clase-3/Clase3'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  //<React.StrictMode> Saqué esto porque en la consola carga dos veces las cosas y se hace dificil de leer.
  <>
  <Clase3 />
  </>
    
  //</React.StrictMode>,
)
