import { useEffect, useState } from "react";
import paises from "../../../fakeApi/paises.json";
import provincias from "../../../fakeApi/provincias.json";

function useLocation() {
  const [paisSeleccionado, setPaisSeleccionado] = useState("");
  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState("");
  const [provincesList, setProvinciasList] = useState([])

  useEffect(() => {
    setProvinciasList(provincias.filter((provincia)=>provincia.country === paisSeleccionado))
  },[paisSeleccionado,provinciaSeleccionada])

  function handleCountryChange(pais) {
    setPaisSeleccionado(pais)
  }

  function handleProvinceChange(nuevaProvincia) {
    setProvinciaSeleccionada(nuevaProvincia);
  }

  return {
    country: paisSeleccionado,
    province: provinciaSeleccionada,
    countriesList: paises,
    provincesList,
    handleCountryChange,
    handleProvinceChange,
  };
}

export default useLocation;
