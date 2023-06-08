import { useState } from "react"
import Componente from "./Componente"

function Ejercicio4() {
    
    const [inProgress, setInProgress] = useState(false)
    function handleCancelar() {
        setInProgress(false)
    }

    return(
        <>
        <h1>Ejercicio 4</h1>
        {!inProgress && <button onClick={()=>setInProgress(true)}>Hacer pedido</button>}
        {inProgress && <Componente onCancel={handleCancelar} />}
        </>
    )
}
export default Ejercicio4