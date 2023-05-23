
/* eslint-disable react/prop-types */
function Producto(props) {
    return(
        <div className="producto">
            <p>{props.nombre}</p>
            <p>{props.descripcion}</p>
            <p>{props.precio}</p>
        </div>
    )
}
export default Producto