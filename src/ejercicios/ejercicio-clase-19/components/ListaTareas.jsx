import React, { useContext } from 'react'
import { TareasContext } from '../contexts/TareasProvider'
import Tarea from './Tarea'

function ListaTareas() {
    const objeto = useContext(TareasContext)

  return (
    <>
    {objeto.listaTareas.map((tarea) => {
        return (
            <Tarea key={tarea.id} {...tarea}/>
        );
      })}
    </>
  )
}

export default ListaTareas