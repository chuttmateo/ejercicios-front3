import { useState } from "react"

export default function Ejercicio2(){

    const [facts, setFacts] = useState([])
    const [loading, setLoading] = useState(false)

    async function handleFetch(){
        setLoading(true)
        const response = await fetch("https://cat-fact.herokuapp.com/facts")
        const data = await response.json()
        const newData = data.map(fact => ({_id: fact._id, text: fact.text}))
        setFacts(newData)
        setLoading(false)
    }
    return(
        <>
        <h1>Ejercicio 2</h1>
        <button onClick={handleFetch}>Buscar Datos</button>
        {loading && <p>loading...</p>}
        {facts.map((fact) => {
        return (
          <div key={fact._id}>
            <p>{fact.text}</p>
          </div>
        );
      })}
        </>
    )
} 