/* eslint-disable react/prop-types */
import React from "react";
export default function Post(props) {
  return (
    <div className="post">
      <p>{props.title}</p>
      <p>{props.body}</p>
      {props.enlace && props.enlace}
    </div>
  );
}
