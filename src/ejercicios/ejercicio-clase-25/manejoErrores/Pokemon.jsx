import React from "react";
import useFetch, { statuses } from "./useFetch";

function Pokemon(props) {
  const { data, status } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${props.pokemon.toLowerCase()}`
  );

  if (status === statuses.LOADING) return <p>Cargando...</p>;
  if (status === statuses.ERROR)
    return <p>Ha ocurrido un error al obtener el pokemon</p>;

  return (
    <div>
      <h3>{data.name}</h3>
      <img src={data.sprites.front_default} alt={data.name} />
    </div>
  );
}

export default Pokemon;
