import { useEffect } from "react";

/* eslint-disable react/prop-types */
function Componente(props) {
  console.log("renderiza el componente");
  useEffect(() => {
    console.log(`buscando datos en api.github.com/users/${props.value}`);
  }, [props.value]);

  return <h2>{props.value}</h2>;
}
export default Componente;
