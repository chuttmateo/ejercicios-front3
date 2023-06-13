import { useMemo, useState } from "react";

export default function Ejercicio1() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const suma = useMemo(() => {
    console.log("sumando");
    return parseInt(input1) + parseInt(input2);
  }, [input1, input2]);

  return (
    <>
      <h1>Ejercicio 1</h1>
      <h4>todo- hacer mejoras en las validaciones de los inputs</h4>
      <h2>Input1 + Input2 = {suma}</h2>
      <input
        type="number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <input
        type="number"
        value={input3}
        onChange={(e) => setInput3(e.target.value)}
      />
    </>
  );
}
