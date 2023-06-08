import { useEffect } from "react"

function Componente() {
    
    useEffect(()=>{
        console.log("montado");
        return ()=>{
            console.log("desmontado");
        }
    },[])

    return(
        <p>Soy un componente</p>
    )
}
export default Componente