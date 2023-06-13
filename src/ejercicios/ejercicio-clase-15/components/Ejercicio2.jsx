import products from "../../../fakeApi/products.json";
import { useMemo } from "react";
import Producto from "./Producto";

export default function Ejercicio2() {
  const productosCaros = useMemo(() => {
    console.log("Calculando productos");
    return products.filter((product) => product.precio > 50);
  }, []);

  return (
    <>
      <h1>Ejercicio 2</h1>
      {productosCaros && (
        <div className="prouctosCaros-div">
          {productosCaros.map((producto) => {
            return <Producto key={producto.id} {...producto} />;
          })}
        </div>
      )}
    </>
  );
}
