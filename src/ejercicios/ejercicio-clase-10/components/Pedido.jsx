/* eslint-disable react/prop-types */
function Pedido(props) {
  return (
    <>
      <div className="pedido">
        <h2 className="plato">{props.plato}</h2>
        <button className="eliminar" onClick={props.onEliminar}>
          Eliminar
        </button>
      </div>
    </>
  );
}

export default Pedido;
