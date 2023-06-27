import Formulario from "./Formulario";
import Peliculas from "./Peliculas";

function Ejercicio1() {
  function handleSubmit(numero) {
    localStorage.setItem("edad", JSON.stringify(numero));
  }

  function handleValidar(edad_minima) {
    const dataLocal = JSON.parse(localStorage.getItem("edad"))
    // if (dataLocal === null) return;
    if (dataLocal >= edad_minima) {
      console.log("Proceda");
    }
  }

  return (
    <>
      <h1>Ejercicio1</h1>
      <Formulario onSubmit={handleSubmit} />
      <Peliculas validar={handleValidar}/>
    </>
  );
}

export default Ejercicio1;
