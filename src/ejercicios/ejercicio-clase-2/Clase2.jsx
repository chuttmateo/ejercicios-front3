import movies from '../../fakeApi/movies.json'
import '../../App.css'
import Titulo from './Titulo';
import Lista from './Lista';



function Clase2() {

    const [primeraPeli, segundaPeli] = movies

    function foo() {
        console.log("Like");
    }

    return (
        <>
            <h1>{primeraPeli.nombre}</h1>
            <p>Los miembros supervivientes de Los Vengadores y sus aliados intentan revertir el daño causado por Thanos en Infinity War</p>
            <button onClick={foo}>Like por consola</button>

            <Titulo title={primeraPeli.genero} />

            <Lista>
                <li>{primeraPeli.nombre}</li>
                <li>{segundaPeli.nombre}</li>
            </Lista>

        </>
    )
}
export default Clase2