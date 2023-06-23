import React, { useContext, useState } from "react";
import { TareasContext } from "../../contexts/TareasProvider";
import { v4 as uuidv4 } from "uuid";
import styles from "./Formulario.module.css";

function Formulario() {
  const { agregarTarea } = useContext(TareasContext);

  const [text, setText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (text === "") return;
    agregarTarea({ id: uuidv4(), body: text });
    setText("");
  }

  return (
    <>
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Guardar</button>
      </form>
    </>
  );
}

export default Formulario;
