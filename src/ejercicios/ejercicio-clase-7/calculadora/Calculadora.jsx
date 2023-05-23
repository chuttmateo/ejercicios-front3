/* eslint-disable react/prop-types */
import { useState } from "react"

function Calculadora(props) {
    // eslint-disable-next-line react/prop-types
    const [sum, setCount] = useState(props.amount)
    function sumar(){
        setCount(sum + props.incremento)
    }
    function restar(){
        setCount(sum - 1)
    }
    function cero(){
        setCount(0)
    }
    function handleOnEquals(){
        props.onEquals(sum)
    }
    return(
        <>
        <h1>{sum}</h1>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={cero}>reset</button>
        <button onClick={handleOnEquals}>=</button>
        </>
    )
}
export default Calculadora