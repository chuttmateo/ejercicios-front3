import React from 'react'
import ReactDOM from 'react-dom/client'
import Clase1 from './Clase1.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  //<React.StrictMode> Saqué esto porque en la consola carga dos veces las cosas y se hace dificil de leer.
  <>
  <Clase1 />
  </>
    
  //</React.StrictMode>,
)
