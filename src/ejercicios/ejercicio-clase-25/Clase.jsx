import { useState } from "react";
import "./Clase.css";
import ComponentLanzaError from "./errorBoundary/ComponentLanzaError";
import ErrorBoundary from "./errorBoundary/ErrorBoundary";
import ManejoErrores from "./manejoErrores/ManejoErrores";
import { useEffect } from "react";

function Clase() {
  const [name, setName] = useState()

  useEffect(() => {
    setTimeout(() => {
      setName("mateo")
    }, 2000);
  }, [])
  
  return (
    <>
      <ManejoErrores />
      <ErrorBoundary fallback={<p>Error</p>} resetCondition={name}>
        <ComponentLanzaError name={name}/>
      </ErrorBoundary>
    </>
  );
}

export default Clase;
