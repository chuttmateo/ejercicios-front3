import { Routes, Route } from "react-router-dom";
import "./Clase.css";
import NavBar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import Shorts from "./pages/Shorts";
import Explorar from "./pages/Explorar";
import Suscripciones from "./pages/Suscripciones";
import Footer from "./components/Footer";

export default function Clase() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="shorts" element={<Shorts />} />
        <Route path="explorar/*" element={<Explorar />} />
        <Route path="suscripciones" element={<Suscripciones />} />
        <Route path="*" element={<h1>ESTA PÁGINA NO EXISTE, NO LO INTENTES</h1>}/>
      </Routes>
      <Footer />
    </>
  );
}
