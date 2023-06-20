import React, { useState } from "react";

export default function Formulario(props) {
  const [genero, setGenero] = useState("Roguelike");
  const [playedTime, setPlayedTime] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (playedTime === "") {
      return;
    }
    props.onSubmit(genero, playedTime);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={genero} onChange={(e) => setGenero(e.target.value)}>
          <option value="Roguelike">Roguelike</option>
          <option value="Platformer">Platformer</option>
          <option value="Adventure">Adventure</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Metroidvania">Metroidvania</option>
          <option value="Simulation">Simulation</option>
          <option value="Board">Board</option>
          <option value="Precision">Precision</option>
        </select>
        <input
          type="number"
          value={playedTime}
          onChange={(e) => setPlayedTime(e.target.value)}
        />
        <button>filtar</button>
      </form>
    </div>
  );
}
