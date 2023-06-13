import { useState } from "react"
import { useEffect } from "react"

export default function Ejercicio1(){
    const [title, setTitle] = useState('')
  
    async function handleFetch() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
      const data = await response.json()
      setTitle(data.title)
    }
    
    useEffect(() => {
      handleFetch()
    }, [])

    return (
      <div>
        <h1>Ejercicio 1</h1>
        {title}
      </div>
    )
  }