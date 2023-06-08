import { useState } from "react";
import Componente from "./Componente";

function Ejercicio2() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
    <button onClick={()=>setIsActive(!isActive)}> Toggle value isActive</button>
    {isActive && <Componente />}
    </>
  );
}

export default Ejercicio2;
