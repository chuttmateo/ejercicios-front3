import "./Clase.css";
import useLocalStorage from "./ejercicio-1/useLocalStorage";
import useLocation from "./ejercicio-2/useLocation";

function Clase() {
  const { dataLocal, actualizar } = useLocalStorage("la-llave");

  const {
    country,
    province,
    countriesList,
    provincesList,
    handleCountryChange,
    handleProvinceChange,
  } = useLocation();

  return (
    <>
      <h1>EJERCICIO 1</h1>
      <h3>Actualiza el localStorage desde este input</h3>
      <input
        type="text"
        onChange={(e) => actualizar(e.target.value)}
        defaultValue={dataLocal}
      />
      <h3>LocalStorage en este momento: {dataLocal}</h3>

      <h1>EJERCICIO 2</h1>
      <p>Id del pais seleccionado {country}</p>
      <select onChange={(e) => handleCountryChange(e.target.value)}>
      <option value=""> Selecciona un país </option>
        {countriesList.map((c) => {
          return (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          );
        })}
      </select>

      <p>Provincia seleccionada {province}</p>
      <select onChange={(e) => handleProvinceChange(e.target.value)}>
      <option value=""> Selecciona una provincia </option>
        {provincesList.map((p) => {
          return (
            <option key={p.id} value={p.name}>
              {p.name}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Clase;
