import React, { useEffect, useState } from 'react'
import games from '../../../../fakeApi/games.json'
import Formulario from '../components/Formulario'
import { useSearchParams } from 'react-router-dom'

export default function Index() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [gamesFiltrados, setGamesFiltrados] = useState([]);
    useEffect(()=>{
        setGamesFiltrados(games.filter((game)=>game.tags.includes(searchParams.get("genre"))))
    },[searchParams])
    
  return (
    <>
    <Formulario inicio={searchParams.get("genre")} onSubmit={(genero)=>{setSearchParams({genre: genero})}}/>
    {gamesFiltrados.map((game)=>{
        return (
            <div key={game.id}>
                <p>{game.name}</p>
                <p>{game.tags}</p>
                <img src={game.imgUrl} alt={`img ${game.name}`} />
            </div>
        )
    })}
    </>
  )
}
