import React, { useState } from "react";

function Formulario(props) {
  const [numero, setNumero] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (numero > 0) {
      props.onSubmit(numero);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Formulario;
