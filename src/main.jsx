import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Clase1 from './ejercicios/ejercicio-clase-1/Clase1.jsx'
import Clase2 from './ejercicios/ejercicio-clase-2/Clase2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  //<React.StrictMode> Saqué esto porque en la consola carga dos veces las cosas y se hace dificil de leer.
  <>
  <Clase2 />
  </>
    
  //</React.StrictMode>,
)
