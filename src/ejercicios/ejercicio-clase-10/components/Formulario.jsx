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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingresa plato"
        value={plato}
        onChange={handleChange}
      />
      <button type="submit">enviar</button>
    </form>
  );
}
export default Formulario;
