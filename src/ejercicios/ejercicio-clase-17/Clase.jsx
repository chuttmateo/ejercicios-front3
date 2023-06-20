import "./Clase.css";
import { useState } from "react";
import Ejercicio1 from "./ejercicio1/App";
import Ejercicio2 from "./ejercicio2/App";

export default function Clase() {
  const [numEjercicio, setEjercicio] = useState(true);
  return (
    <>
      <button onClick={() => setEjercicio(!numEjercicio)}>
        Cambiar de Ejercicio
      </button>
      {numEjercicio === true && <Ejercicio1 />}
      {numEjercicio === false && <Ejercicio2 />}
    </>
  );
}
