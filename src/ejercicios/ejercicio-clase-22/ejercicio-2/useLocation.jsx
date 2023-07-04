import { useState } from "react";
import paises from "../../../fakeApi/paises.json";
import provincias from "../../../fakeApi/provincias.json";

function useLocation() {
  const [paisSeleccionado, setPaisSeleccionado] = useState("");
  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState("");

  function handleCountryChange(nuevoPais) {
    setPaisSeleccionado(nuevoPais);
  }

  function handleProvinceChange(nuevaProvincia) {
    setProvinciaSeleccionada(nuevaProvincia);
  }

  return {
    country: paisSeleccionado,
    province: provinciaSeleccionada,
    countriesList: paises,
    provincesList: provincias,
    handleCountryChange,
    handleProvinceChange,
  };
}

export default useLocation;
