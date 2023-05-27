import { useState} from "react";
import { v4 as uuidv4 } from 'uuid';
function Formulario() {
    //  const [datos, setDatos] = useState({
    //     numero:0,
    //     submit:0,
    //     err:false
    // })

    const [numero, setNumero] = useState('')
    const [nombre, setNombre] = useState('')
    const [submit, setSubmit] = useState([])
    const [err, setErr] = useState(
        {
            numero:false,
            nombre:false
        }
    )

    function handleSubmit(e) {
        let patron = /^[A-Za-z]+$/
        e.preventDefault()
        if(numero <= 0 || isNaN(numero)){
            setErr({numero:true})
        }else if(nombre.trim() === '' || !patron.test(nombre)) {
            setErr({nombre:true})
        }else{
            setErr({
                nombre:false,
                numero:false
            })
            setSubmit([...submit, {
                numero: numero, 
                nombre: nombre
            }])
            setNumero('')
            setNombre('')
        }        
    }
    
    function handleChange(e) {
        setNumero(e.target.value)
    }
    return(
        <>
        <form className="formulario" onSubmit={handleSubmit}>
            <label>Ingresa tu número favorito</label>
            <input className="input" 
            type="number" 
            placeholder="Ingresa tu número favorito" 
            value={numero} 
            onChange={handleChange}/>
            <label htmlFor="name">Nombre</label>
            <input 
            className="input"
            type="text"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(event)=> setNombre(event.target.value)} />
            <button>Enviar</button>
            {submit.map((obj) => {
                
                return (
                    <p key={uuidv4()}>{obj.nombre}, tu número favorito es: {obj.numero} </p>
                )
            })}
            {err.numero ? <p className="error">Tu número debe ser mayor a 0</p>: undefined}
            {err.nombre ? <p className="error">De verdad no tienes nombre???</p>: undefined}
        </form>
        </>
    )
}
export default Formulario