import React, { useState } from 'react'
import Pokemon from './Pokemon'

function Ejercicio1() {

    const [value, setValue] = useState("");
    const [pokemon, setPokemon] = useState("pikachu");

  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault();
            if (value.length < 1) return;
            setPokemon(value)
        }}>
            <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}}/>
            <button type='submit'>Buscar Pokemón</button>
        </form>
        <h1>Poké API</h1>
        <Pokemon pokemon={pokemon}/>
    </div>
  )
}

export default Ejercicio1