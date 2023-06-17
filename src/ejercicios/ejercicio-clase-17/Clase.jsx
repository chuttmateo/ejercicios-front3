import { Route, Routes } from "react-router-dom";
import "./Clase.css";
import Index from "./pages/Index";
import Posts from "./pages/Posts";

export default function Clase() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/posts/:id" element={<Posts />} />
      </Routes>
    </>
  );
}
