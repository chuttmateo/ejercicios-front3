import "../../App.css";
import Card from "./Card";

function Clase4() {
  return (
    <>
      <br />
      <Card>Contenido de la card</Card>
      <br />
      <Card title="Titulo de la card">Contenido de la card</Card>
      <br />
      <Card footer="Footer de la card">Contenido de la card</Card>
      <br />
      <Card title="Titulo de la card" footer="Footer de la card">
        Contenido de la card
      </Card>
    </>
  );
}
export default Clase4;
