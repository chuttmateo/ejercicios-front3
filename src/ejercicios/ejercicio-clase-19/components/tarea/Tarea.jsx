import { useContext } from "react";
import { TareasContext } from "../../contexts/TareasProvider";
import styles from './Tarea.module.css'

function Tarea(props) {
  const {eliminarTarea} = useContext(TareasContext)
  return (
    <>
      <div className={styles.div}>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
        <button onClick={()=> eliminarTarea(props.id)}>eliminar</button>
      </div>
    </>
  );
}

export default Tarea;
