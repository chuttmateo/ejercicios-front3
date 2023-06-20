import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import InfoJuego from "./pages/InfoJuego";

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Index />} />
        <Route path="/juego/:id" element={<InfoJuego />} />
      </Routes>
    </>
  );
}
