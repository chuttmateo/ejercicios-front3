import React from "react";

function Tarea(props) {
  return (
    <div>
      <p>{props.body}</p>
      <p>{`¿está completa?: ${props.estaCompleta}`}</p>
      <button
        onClick={() => {
          props.dispatch({ type: "completar", id: props.id });
        }}
      >
        completa
      </button>
      <button
        onClick={() => {
          props.dispatch({ type: "eliminar", id: props.id });
        }}
      >
        eliminar
      </button>
    </div>
  );
}

export default Tarea;
