/* eslint-disable react/prop-types */
function Cuenta(props) {

    return(
        <div className="cuenta">
            <h1>{props.usuario.nombre}</h1>
            <p>{props.usuario.email}</p>
            {props.onSeguir ? <button onClick={() => props.onSeguir(props.usuario)}>Seguir</button> : undefined}
            {props.onEliminar ? <button onClick={() => props.onEliminar(props.usuario)}>Eliminar</button> : undefined}
        </div>
    )
}
export default Cuenta;