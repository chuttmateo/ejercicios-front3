import "./Clase.css";
import Pedido from "./components/Pedido";
import Formulario from "./components/Formulario.jsx";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";

function Clase() {
  const [pedidos, setPedidos] = useState([]);

  function eliminarPedido(id) {
    const nuevosPedidos = pedidos.filter((pedido) => pedido.id !== id);
    setPedidos(nuevosPedidos);
  }

  function agregarPedido(plato) {
    setPedidos([
      ...pedidos,
      {
        id: uuidv4(),
        plato,
      },
    ]);
  }

  return (
    <>
      <Formulario onSubmit={agregarPedido} />
      <div className="pedidos">
      {pedidos.map((pedido) => {
        return (
          <Pedido
            key={pedido.id}
            plato={pedido.plato}
            onEliminar={() => eliminarPedido(pedido.id)}
          />
        );
      })}
      </div>
      
    </>
  );
}
export default Clase;
