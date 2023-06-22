import React, { useContext } from "react";
import { TareasContext } from "../../contexts/TareasProvider";
import Tarea from "../tarea/Tarea";
import styles from './ListaTareas.module.css'

function ListaTareas() {
  const objeto = useContext(TareasContext);

  return (
    <div className={styles.div}>
      {objeto.listaTareas.map((tarea) => {
        return <Tarea key={tarea.id} {...tarea} />;
      })}
    </div>
  );
}

export default ListaTareas;
