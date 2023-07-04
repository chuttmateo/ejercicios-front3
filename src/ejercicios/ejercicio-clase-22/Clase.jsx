import "./Clase.css";
import useLocalStorage from "./ejercicio-1/useLocalStorage";


function Clase() {

  const {dataLocal, actualizar} = useLocalStorage("la-llave")


  return (
    <>
    <h3>Actualiza el localStorage desde este input</h3>
    <input type="text" onChange={(e)=> actualizar(e.target.value)} defaultValue={dataLocal}/>
    <h3>LocalStorage en este momento: {dataLocal}</h3>
    </>
  );
}

export default Clase;
