import React, { useReducer, useState } from "react";
import styles from "./Ejercicio2.module.css";

function Ejercicio2() {
  const [texto, setTexto] = useState("");
  function funcionReducer(state, action) {
    if (action.type === "agregar") {
      return { tareas: [...state.tareas, action.payload] };
    }
    if (action.type === "completa") {
      return {
        tareas: state.tareas.map((t) => {
          if (t.id === action.id) {
            t.estaCompleta = true;
            return t;
          }
          return t;
        }),
      };
    }
    if (action.type === "eliminar") {
      return { tareas: state.tareas.filter((t) => t.id !== action.id) };
    }
    if (action.type === "completar-todas") {
      return {
        tareas: state.tareas.map((t) => {
          t.estaCompleta = true;
          return t;
        }),
      };
    }
    if (action.type === "eliminar-completas") {
        return {tareas: state.tareas.filter((t)=> t.estaCompleta === false)}
    }
  }

  const [state, dispatch] = useReducer(funcionReducer, {
    tareas: [],
  });

  return (
    <>
      <h1>Ejercicio 2</h1>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({
            type: "agregar",
            payload: { id: Math.random(), body: texto, estaCompleta: false },
          });
          setTexto("");
        }}
      >
        Crear Tarea
      </button>
      <button
        onClick={() => {
          dispatch({ type: "completar-todas" });
        }}
      >
        Completar Todas
      </button>
      <button
      onClick={()=>dispatch({type: "eliminar-completas"})}
      >Eliminar Completas</button>
      <div className={styles.tareas}>
        {state.tareas.map((tarea) => {
          return (
            <div key={tarea.id}>
              <p>{tarea.id}</p>
              <p>{`esta completa: ${tarea.estaCompleta}`}</p>
              <button
                onClick={() => {
                  dispatch({ type: "completa", id: tarea.id });
                }}
              >
                completa
              </button>
              <button
                onClick={() => {
                  dispatch({ type: "eliminar", id: tarea.id });
                }}
              >
                eliminar
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Ejercicio2;
