import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
function Componente(props) {
  
  const [isConfirmed, setIsConfirmed] = useState(false)

  useEffect(() => {
    console.log("Procesando pedido...")
    const timeout = setTimeout(() => {
      console.log("Pedido procesado")
      setIsConfirmed(true)
    }, 2000)

    return () => {
      console.log("Pedido cancelado")
      clearTimeout(timeout)
    }
  }, [])
  
  return (
    <>
    <div>
      {isConfirmed ? <h1>Pedido Listo</h1> : <h1>Procesando pedido...</h1>}
      <button onClick={props.onCancel}>Cancelar pedido</button>
    </div>
    </>
  )
}
export default Componente;
