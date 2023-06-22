import "./Clase.css";

import React from "react";
import TareasProvider from "./contexts/TareasProvider";
import Formulario from "./components/Formulario";
import ListaTareas from "./components/ListaTareas";

function Clase() {
  return (
    <>
      <TareasProvider>
        <Formulario />
        <ListaTareas />
      </TareasProvider>
    </>
  );
}

export default Clase;
