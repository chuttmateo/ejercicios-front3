import React, { useEffect, useState } from "react";
import games from "../../../../fakeApi/games.json";
import Formulario from "../components/Formulario";
import { Link, useSearchParams } from "react-router-dom";
import Juego from "../components/Juego";

export default function Index() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [gamesFiltrados, setGamesFiltrados] = useState([]);

  useEffect(() => {
    setGamesFiltrados(
      games.filter(
        (game) =>
          game.tags.includes(searchParams.get("genre")) &&
          parseInt(game.playedTime) >= parseInt(searchParams.get("minPlayedTime"))
      )
    );
  }, [searchParams]);

  return (
    <>
      <Formulario
        inicioSelect={searchParams.get("genre")}
        inicioInput={searchParams.get("minPlayedTime")}
        onSubmit={(genero, minPlayedTime) => {
          setSearchParams({ genre: genero, minPlayedTime });
        }}
      />
      {gamesFiltrados.map((game) => {
        return (
          <Juego
            key={game.id}
            {...game}
            enlace={<Link to={`juego/${game.id}`}>Ver Detalles</Link>}
          />
        );
      })}
    </>
  );
}
