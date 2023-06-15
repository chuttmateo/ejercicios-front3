import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/shorts">Shorts</Link>
      <Link to="/suscripciones">Subscripciones</Link>
      <Link to="/explorar">Explorar</Link>
    </nav>
  );
}
