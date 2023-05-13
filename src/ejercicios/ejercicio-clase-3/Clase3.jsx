import isOdd from "is-odd"
import '../../App.css'

function Clase3() {

    function impar() {
        return isOdd(4).toString()
    }

    return(
        <>
        <h3>¿El 4 es impar?: {impar()}</h3>
        </>
    )    
}
export default Clase3