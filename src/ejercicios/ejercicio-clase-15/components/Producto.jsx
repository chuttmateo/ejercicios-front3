/* eslint-disable react/prop-types */
export default function Producto(props) {
    return (
        <div>
            <h4>{props.nombre}</h4>
            <p>{props.precio}</p>
            <p>{props.descripcion}</p>
        </div>
    )
}