import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TareaForm(props) {
  const [texto, setTexto] = useState("");
  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button
        onClick={() => {
            if (texto.length >= 5) {
                props.dispatch({
                    type: "agregar",
                    payload: { id: uuidv4(), body: texto, estaCompleta: false },
                  });
                  setTexto("");
            }
        }}
      >
        Crear Tarea
      </button>
      <button
        onClick={() => {
          props.dispatch({ type: "completar-todas" });
        }}
      >
        Completar Todas
      </button>
      <button onClick={() => props.dispatch({ type: "eliminar-completas" })}>
        Eliminar Completas
      </button>
    </div>
  );
}

export default TareaForm;
