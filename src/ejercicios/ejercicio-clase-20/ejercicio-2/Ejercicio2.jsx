import React, { useState } from "react";
import libros from '../../../fakeApi/books.json'
import styles from './Ejercicio2.module.css'

function Ejercicio2() {

    const [favoritos, setFavoritos] = useState([])

    function handleButton(libro) {
        if(favoritos.includes(libro)){
            setFavoritos(favoritos.filter((fav)=>fav.id != libro.id))
            return
        }
        setFavoritos([...favoritos, libro])
    }

  return (
    <div className={styles.contenedor}>
      <div>
        <h2>Todos los libros</h2>
        {libros.map((libro)=>{
            return (
                <div key={libro.id}>
                    <p>{libro.nombre}</p>
                    <p>{libro.saga}</p>
                    <p>{libro.planeta}</p>
                    <button onClick={()=>handleButton(libro)}>Añadir Favorito</button>
                </div>
            )
        })}
      </div>
      <div>
        <h2>Libros favoritos</h2>
        {favoritos.map((libro)=>{
            return (
                <div key={libro.id}>
                    <p>{libro.nombre}</p>
                    <p>{libro.saga}</p>
                    <p>{libro.planeta}</p>
                    <button onClick={()=>handleButton(libro)}>Eliminar Favorito</button>
                </div>
            )
        })}
      </div>
    </div>
  );
}

export default Ejercicio2;
