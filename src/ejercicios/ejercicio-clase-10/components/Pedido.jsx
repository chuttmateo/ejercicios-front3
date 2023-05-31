/* eslint-disable react/prop-types */
import style from "./Pedido.module.css";
function Pedido(props) {
  return (
    <>
      <div className={style.pedido}>
        <h2 className={style.plato}>{props.plato}</h2>
        <button className={style.eliminar} onClick={props.onEliminar}>
          Eliminar
        </button>
      </div>
    </>
  );
}

export default Pedido;
