import { useState } from 'react'
import './Clase8.css'
import Cuenta from './Cuenta'
import {usuarios} from './usuarios.js'

function Clase8() {
    const [seguidos, setSeguidos] = useState([])
    function handleSeguir(usuario) {
        setSeguidos([...seguidos, usuario])
    }
    function handleEliminar(usuario){
        console.log(usuario)
        setSeguidos(seguidos.filter(user => user !== usuario))
    }
    

    return(
        <>
        {seguidos.map((seguido)=> {
            return(
                <Cuenta 
                key={Math.random()}
                usuario = {seguido}
                onEliminar = {handleEliminar}
                />
            )
        })}
        {usuarios.map((user)=> {
            return (
                <Cuenta key={user.id}
                usuario = {{...user}}
                onSeguir={handleSeguir}
                />
            )
        })}
        <h1>holas</h1>
        </>
    )
}
export default Clase8