import { Route, Routes, Link } from "react-router-dom";
import Peliculas from "./explorar/Peliculas";
import Musica from "./explorar/Musica";
import Tendencias from "./explorar/Tendencias";

export default function Explorar() {
  return (
    <>
      <h1>Explorar</h1>
      <section>
        <Link to='musica'>Musica</Link>
        <Link to='peliculas'>Peliculas</Link>
        <Link to='tendencias'>Tendencias</Link>
      </section>
      
      <Routes>
        <Route path="tendencias" element={<Tendencias />}/>
        <Route path="musica" element={<Musica/>}/>
        <Route path="peliculas" element={<Peliculas/>}/>
      </Routes>
    </>
  );
}
