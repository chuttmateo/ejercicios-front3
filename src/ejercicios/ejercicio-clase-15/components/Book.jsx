/* eslint-disable react/prop-types */
export default function Book(props) {
  return (
    <div>
      <h4>{props.nombre}</h4>
      <p>{props.saga}</p>
      <p>{props.planeta}</p>
      <p>{props.año}</p>
      <p>{props.paginas}</p>
    </div>
  );
}
