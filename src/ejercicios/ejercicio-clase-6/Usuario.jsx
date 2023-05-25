/* eslint-disable react/prop-types */
function Usuario(props) {
    return(
        <div className="usuario">
            <p>{props.apodo}</p>
            {props.mascotas.map((mascota) =>{
                const {nombre, edad, color} = mascota
                return (
                    <li key={Math.random()}> {nombre} {edad} {color}</li>
                )
            })}
        </div>
    )
}
export default Usuario