import { useEffect, useState } from "react"

export default function Ejercicio3() {
    const [text, setText] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleFetch() {
        setLoading(true)
        const data = await ( await fetch("https://cat-fact.herokuapp.com/facts/random")).json()
        setText(data.text)
        setLoading(false)
    }

    useEffect(()=>{ 
        handleFetch()
    },[])

    return(
        <>
        <h1>Ejercicio 3</h1>
        {loading ? <p>Loading...</p> : <h2>{text}</h2> }
        <button onClick={handleFetch}>Siguiente Facto</button>
        </>
    )
}