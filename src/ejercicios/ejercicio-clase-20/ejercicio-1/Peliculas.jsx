import React from 'react'
import peliculas from '../../../fakeApi/movies.json'

function Peliculas(props) {

    function handleButton(edad_minima) {
        props.validar(edad_minima)
    }

  return (
    <>
    {peliculas.map((peli)=>{
        return (
            <div key={peli.id}>
                <h2>{peli.nombre}</h2>
                <p>{peli.genero}</p>
                <p>{peli.edad_minima}</p>
                <button onClick={()=>handleButton(peli.edad_minima)}>Ver Pelicula</button>
            </div>
        )
    })}
    </>
  )
}

export default Peliculas