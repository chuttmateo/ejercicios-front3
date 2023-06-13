import { useMemo, useState } from "react";
import books from "../../../fakeApi/books.json";
import Book from "./Book";

export default function Ejercicio3() {
    console.log("renderizando Ejercicio3");
  const [planeta, setPlaneta] = useState("");

  const librosFiltrados = useMemo(() => {
    console.log("Filtrando por país...");
    return books.filter((book) => book.planeta == planeta);
  }, [planeta]);

  return (
    <>
      <h1>Ejercicio 3</h1>
      <select onChange={(e) => setPlaneta(e.target.value)}>
        <option value="Roshar">Roshar</option>
        <option value="Skadrial">Skadrial</option>
        <option value="Nalthis">Nalthis</option>
        <option value="Threnody">Threnody</option>
      </select>
      {librosFiltrados && (
        <div className="librosFiltrados-div">
          {librosFiltrados.map((libro) => {
            return <Book key={libro.id} {...libro} />;
          })}
        </div>
      )}
    </>
  );
}
