import { useState } from "react";
/* eslint-disable react/prop-types */
function Formulario(props) {
  const [plato, setPlato] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!plato) return;
    props.onSubmit(plato);
    setPlato("");
  }

  function handleChange(event) {
    setPlato(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2>Ingresa tu plato para hacer un pedido</h2>
      <input
        type="text"
        placeholder="Ingresa plato"
        value={plato}
        onChange={handleChange}
        className="input"
      />
      <button type="submit">Ordenar</button>
    </form>
  );
}
export default Formulario;
