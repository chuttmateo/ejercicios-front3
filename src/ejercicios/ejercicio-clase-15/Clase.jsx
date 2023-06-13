import { useState } from "react";
import "./Clase.css";
import Ejercicio1 from "./components/Ejercicio1";
import Ejercicio2 from "./components/Ejercicio2";
import Ejercicio3 from "./components/Ejercicio3";

export default function Clase() {

const [toggle, setToggle] = useState(false)
console.log("re-renderizando");
  return (
    <>
    <button onClick={()=> setToggle(!toggle)}>Re Renderizar el componente App</button>
    <Ejercicio1 />
    <hr />
    <Ejercicio2 />
    <hr />
    <Ejercicio3 />
    </>
  );
}
