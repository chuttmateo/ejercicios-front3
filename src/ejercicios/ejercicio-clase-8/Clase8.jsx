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
        setSeguidos(seguidos.filter(user => user !== usuario))
    }
    

    return(
        <>
        <h2>Seguidos {seguidos.length}</h2>
        <div className='card-grid seguidos'>
        {seguidos.map((seguido)=> {
            return(
                <Cuenta 
                key={Math.random()}
                usuario = {seguido}
                onEliminar = {handleEliminar}
                />
            )
        })}
        </div>
        <h2>Para seguir {usuarios.length}</h2>
        <div className='card-grid'>
        {usuarios.map((user)=> {
            return (
                <Cuenta key={user.id}
                usuario = {{...user}}
                onSeguir={handleSeguir}
                />
            )
        })}
        </div>
        </>
    )
}
export default Clase8