import "./Clase4.css";
import Card from "./Card";

function Clase4() {
  return (
    <>
      <div className="principal">
        <Card>Contenido de la card</Card>
        <Card title="Titulo de la card">Contenido de la card</Card>
        <Card footer="Footer de la card">Contenido de la card</Card>
        <Card title="Titulo de la card" footer="Footer de la card">
          Contenido de la card
        </Card>
      </div>
    </>
  );
}
export default Clase4;
