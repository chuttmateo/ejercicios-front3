import React, { useState } from "react";

export default function Formulario(props) {
  const [genero, setGenero] = useState("Roguelike");
  function handleSubmit(e) {
    e.preventDefault()
    props.onSubmit(genero)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select defaultValue={props.inicio} onChange={(e)=>setGenero(e.target.value)}>
          <option value="Roguelike">Roguelike</option>
          <option value="Platformer">Platformer</option>
          <option value="Adventure">Adventure</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Metroidvania">Metroidvania</option>
          <option value="Simulation">Simulation</option>
          <option value="Board">Board</option>
          <option value="Precision">Precision</option>
        </select>
        <button>filtar</button>
      </form>
    </div>
  );
}
