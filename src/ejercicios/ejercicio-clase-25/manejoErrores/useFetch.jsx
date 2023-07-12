import { useEffect, useState } from "react";

export const statuses = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  LOADING: "LOADING",
};

function useFetch(url) {
  const [status, setStatus] = useState(statuses.LOADING);
  const [data, setData] = useState();

  useEffect(() => {
    fetchApi(url);
  }, [url]);

  async function fetchApi(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Hubo un error al consultar a la API");
      const dataJson = await response.json();
      setData(dataJson);
      setStatus(statuses.SUCCESS);
    } catch (error) {
      console.log("Error en la llamada a la API:", error);
      setStatus(statuses.ERROR);
    }
  }

  return { status, data };
}

export default useFetch;
