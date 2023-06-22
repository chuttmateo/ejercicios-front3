import React, { useState } from "react";
import { createContext } from "react";

export const TareasContext = createContext();

function TareasProvider({ children }) {
  const [listaTareas, setListaTareas] = useState([]);

  function agregarTarea(tarea) {
    setListaTareas([...listaTareas, tarea]);
  }

  function eliminarTarea(id) {
    setListaTareas(listaTareas.filter((tarea)=>tarea.id !== id))
  }

  return (
    <TareasContext.Provider value={{ listaTareas, agregarTarea, eliminarTarea }}>
      {children}
    </TareasContext.Provider>
  );
}

export default TareasProvider;
