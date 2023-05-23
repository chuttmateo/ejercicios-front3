import { useState } from 'react';
import './Clase7.css'
import Calculadora from './calculadora/Calculadora'
function Clase7() {
    const [sum, setSum] = useState(0)
    function onEquals(suma){
        setSum(sum + suma)
    }
    return(
        <>
        <h1>{sum}</h1>
        <Calculadora 
            amount={0}
            onEquals={onEquals}
            incremento={1}
        />
        <Calculadora 
            amount={0}
            onEquals={onEquals}
            incremento={5}
        />
        <Calculadora 
            amount={0}
            onEquals={onEquals}
            incremento={13}
        />
        </>
    )
}
export default Clase7