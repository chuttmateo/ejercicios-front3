import { useState } from "react"
import Componente from "./Componente"

function Ejercicio5() {
    const [estaSolicitado, setEstaSolicitado] = useState(false)

    return(
        <>
        {estaSolicitado ?<button onClick={()=>setEstaSolicitado(false)}>cancelar pizza</button> : <button onClick={()=>setEstaSolicitado(true)}>solicitar pizza</button>}
        {estaSolicitado && <Componente />}
        </>
    )
}
export default Ejercicio5