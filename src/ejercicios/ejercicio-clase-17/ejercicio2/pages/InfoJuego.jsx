import React from "react";
import Juego from "../components/Juego";
import games from "../../../../fakeApi/games.json";
import { Link, useParams } from "react-router-dom";

export default function InfoJuego() {
  const params = useParams();
  const juego = games.find((game) => game.id === params.id);
  return <Juego {...juego} enlace={<Link to={"/"}>volver</Link>} />;
}
