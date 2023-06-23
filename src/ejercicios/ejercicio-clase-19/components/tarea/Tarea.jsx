import { useContext } from "react";
import { TareasContext } from "../../contexts/TareasProvider";
import styles from "./Tarea.module.css";

function Tarea(props) {
  const { eliminarTarea } = useContext(TareasContext);
  return (
    <>
      <div className={styles.div}>
        <h2>{props.body}</h2>
        <button onClick={() => eliminarTarea(props.id)}>Eliminar</button>
      </div>
    </>
  );
}

export default Tarea;
