import { useContext } from "react";
import { TareasContext } from "../contexts/TareasProvider";

function Tarea(props) {
  const {eliminarTarea} = useContext(TareasContext)
  return (
    <>
      <div>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
        <button onClick={()=> eliminarTarea(props.id)}>eliminar</button>
      </div>
    </>
  );
}

export default Tarea;
