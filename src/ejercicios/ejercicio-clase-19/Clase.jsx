import "./Clase.css";

import React from "react";
import TareasProvider from "./contexts/TareasProvider";
import Formulario from "./components/formulario/Formulario";
import ListaTareas from "./components/listaTareas/ListaTareas";

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
