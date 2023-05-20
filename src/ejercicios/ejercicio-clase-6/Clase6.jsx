import "./Clase6.css";
import products from "../../fakeApi/products.json";
import cuentas from "../../fakeApi/accounts.json";
import Producto from "./producto/Producto";
import usuarios from "../../fakeApi/users.json";
import Usuario from "./usuario/Usuario";

function Clase6() {
  let arr = products.map((p) => {
    return (
      <Producto
        key={p.id}
        nombre={p.nombre}
        descripcion={p.descripcion}
        precio={p.precio}
      />
    );
  });

  let arrCuentas = cuentas.map((c) => {
    return (
      <li key={c.account}>
        <a
          className="cuenta"
          target="_blank"
          href={`https://twitter.com/${c.account}`}
          rel="noreferrer"
        >
          {c.userName}
        </a>
      </li>
    );
  });

  let arrUsuarios = usuarios.map((user) => {
    return (
        <Usuario key={user.email} apodo={user.apodo} />
    );
  });

  return (
    <>
      <h1>Cuentas</h1>
      <ul className="cuentas">{arrCuentas}</ul>
      <ul className="usuarios">{arrUsuarios}</ul>
      <div className="catalogo">{arr}</div>
    </>
  );
}
export default Clase6;
