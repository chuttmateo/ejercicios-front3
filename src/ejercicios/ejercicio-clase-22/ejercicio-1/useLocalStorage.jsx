import { useEffect, useState } from "react"

function useLocalStorage(key) {

    const [ dataLocal, setState] = useState("")

    useEffect(()=>{
        const data = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : "";
        setState(data)
    },[])
    function actualizar(valor) {
        localStorage.setItem(key, JSON.stringify(valor))
        setState(valor)
    }

    return { dataLocal, actualizar }
}

export default useLocalStorage