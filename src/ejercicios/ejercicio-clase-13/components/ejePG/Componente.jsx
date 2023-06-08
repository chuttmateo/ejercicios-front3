import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
function Componente() {
  
  const [montado, setMontado] = useState(false)

  useEffect(()=>{
    console.log("montando componente...");
    const timer = setTimeout(()=>{
      console.log("componente montado");
      setMontado(true)
    }, 2000)
    return ()=>{
      clearTimeout(timer)
      console.log("componente desmontado")
    }
  },[])
  return (
    <>
    {montado && <h2>Soy un pedido de pizza</h2>}
    </>
  )
}
export default Componente;
