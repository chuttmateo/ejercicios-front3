import users from '../../fakeApi/users.json'
import Ejercicios from './ejercicios/Ejercicios';

function Clase() {

    console.log("Primer ejercicio ------");
    console.log(users[0].email);
    console.log(users[2].apodo);
    console.log(users[2].mascotas[1].color);

    console.log("Segundo ejercicio ------");
    let [primerUsuario, , , cuartoUsuario] = users
    console.log("cuartoUsuario", cuartoUsuario);
    let { email, mascotas } = primerUsuario
    console.log({ email, mascotas });

    console.log("Tercer ejercicio ------");
    let mascotasCopia = [...mascotas, { "nombre": "Nami", "edad": 2, "color": "negro" }]
    console.log(mascotas);
    console.log(mascotasCopia);

    console.log("Cuarto ejercicio ------");
    function foo({ apodo, mascotas }) {
        return `El Usuario ${apodo} tiene ${mascotas.length} mascotas`
    }
    let { apodo } = primerUsuario
    let objeto = {
        apodo: apodo,
        mascotas: mascotas
    }
    console.log(foo(objeto));

    console.log("Quinto ejercicio ------");
    const filtrados = users.filter((user) => user.mascotas.length > 1)
    console.log(filtrados);

    const usersMap = users.map((user) => foo(user))
    console.log(usersMap);

    const mascotasTotales = usersMap.reduce((acc, value)=>
        acc + parseInt(value.split(" ")[4])
    , 0)
    console.log("Cantidad total de mascotas: ", mascotasTotales);

    return (
        <>
            <h1>Revisa la consola, bro</h1>
            <Ejercicios />
        </>
    )
}
export default Clase