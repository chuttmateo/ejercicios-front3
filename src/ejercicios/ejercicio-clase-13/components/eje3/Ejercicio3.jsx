import { useState } from "react";
import Componente from "./Componente";

function Ejercicio3() {
    const [inputValue, setInputValue] = useState('')
    const [submitedValue, setSubmitedValue] = useState('')
    return (
      <div>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => setSubmitedValue(inputValue)}
        >
          Submit
        </button>
        <Componente value={submitedValue} />
      </div>
    )
  }
  
  export default Ejercicio3
