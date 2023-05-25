/* eslint-disable react/prop-types */
function Producto(props) {
    
    return(
        <div className="producto">
            <h2>{props.nombre}</h2>
            <p>{props.descripcion}</p>
            <p>{props.precio}</p>
        </div>
    )
}
export default Producto