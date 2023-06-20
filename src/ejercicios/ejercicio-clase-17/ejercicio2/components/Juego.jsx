import React from "react";

export default function Juego(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.tags}</p>
      <p>{props.playedTime}</p>
      <img src={props.imgUrl} alt={`img ${props.name}`} />
      {props.enlace && props.enlace}
    </div>
  );
}
