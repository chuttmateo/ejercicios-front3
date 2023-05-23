import { useState } from 'react';
import './Clase7.css'
import Calculadora from './calculadora/Calculadora'
function Clase7() {
    const [sum, setSum] = useState(0)
    function onEquals(suma){
        setSum(sum + suma)
    }
    function cero() {
        setSum(0)
    }
    return(
        <div className="container">
        
        <div>
        <h1>{sum}</h1>
        <button onClick={cero}>reset total</button>
        </div>
        <div className="calculadorasDiv">
        <Calculadora 
            amount={1}
            onEquals={onEquals}
            incremento={1}
        />
        <Calculadora 
            amount={5}
            onEquals={onEquals}
            incremento={5}
        />
        <Calculadora 
            amount={13}
            onEquals={onEquals}
            incremento={13}
        />
        </div>
        </div>
        
    )
}
export default Clase7