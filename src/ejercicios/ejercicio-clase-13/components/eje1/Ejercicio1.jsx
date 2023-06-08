import { useEffect } from "react"

function Ejercicio1() {
    
    useEffect(()=>{
        console.log("montado - ejercicio 1");
    },
    [])
    return (
        <h1>eje 1</h1>
    )
}
export default Ejercicio1