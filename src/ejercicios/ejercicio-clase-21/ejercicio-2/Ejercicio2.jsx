import React from "react";
import styles from "./Ejercicio2.module.css";
import Tarea from "./Tarea";
import TareaForm from "./TareaForm";
import { funcionReducer } from "./Reducer";
import { useReducer } from "react";

function Ejercicio2() {
  const [state, dispatch] = useReducer(funcionReducer, {
    tareas: [],
  });
  return (
    <>
      <h1>Ejercicio 2</h1>
      <TareaForm dispatch={dispatch} />
      <div className={styles.tareas}>
        {state.tareas.map((tarea) => {
          return <Tarea key={tarea.id} {...tarea} dispatch={dispatch} />;
        })}
      </div>
    </>
  );
}

export default Ejercicio2;
