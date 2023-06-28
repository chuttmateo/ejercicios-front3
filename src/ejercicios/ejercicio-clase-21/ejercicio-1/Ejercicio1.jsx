import React, { useReducer, useState } from "react";

function Ejercicio1() {
  const [state, dispatch] = useReducer(funcionReducer, { contador: 1 });
  const [paso, setPaso] = useState("");

  function funcionReducer(state, action) {
    if (action.type === "incrementar") {
      return {
        contador: state.contador + parseInt(action.payload),
      };
    } else if (action.type === "decrementar") {
      return {
        contador: state.contador - parseInt(action.payload),
      };
    }
  }

  return (
    <>
      <input
        type="text"
        value={paso}
        onChange={(e) => {
          if (/^s*\d*$/.test(e.target.value)) {
            setPaso(e.target.value);
          }
        }}
      />
      <h1>{state.contador}</h1>
      <button
        onClick={() => {
          dispatch({ type: "incrementar", payload: paso });
        }}
      >
        incrementar
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrementar", payload: paso });
        }}
      >
        Decrementar
      </button>
    </>
  );
}

export default Ejercicio1;
