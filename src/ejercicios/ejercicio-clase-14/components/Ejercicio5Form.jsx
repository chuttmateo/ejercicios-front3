/* eslint-disable react/prop-types */
import { useState } from "react"

export default function Ejercicio5Form(props) {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    function handlesubmit(e) {
        e.preventDefault()
        if (!title || !body) {
            return
        }
        props.onSubmit({title, body})
    }
    return (
        <form onSubmit={handlesubmit}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <textarea value={body} onChange={e => setBody(e.target.value)}></textarea>
            <button type="submit">enviar</button>
        </form>
    )
}