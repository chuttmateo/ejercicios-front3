export default function Ejercicios() {
  const numbers = [1, 2, 3, 4, 5];

  const nombres = ["Juan", "María", "Carlos"];

  const products = [
    { id: 1, name: "Camisa", price: 20, enDescuento: true },
    { id: 2, name: "Pantalón", price: 30, enDescuento: false },
    { id: 3, name: "Zapatos", price: 60, enDescuento: false },
  ];

  const students = [
    { name: "John", grade: 85 },
    { name: "Maria", grade: 92 },
    { name: "Carlos", grade: 78 },
    { name: "Laura", grade: 60 },
  ];

  //Dado un array de números, utiliza el método map para obtener un nuevo array que contenga el cuadrado de cada número.
  const cuadrados = numbers.map((num) => {
    return num * num;
  });
  console.log("Numeros Cuadrados", cuadrados);

  //Dado un array de objetos que representan productos, utiliza el método map para obtener un nuevo array que contenga solo los nombres de los productos.
  const nombresProductos = products.map((product) => product.name);
  console.log("Nombres de Productos", nombresProductos);

  //Dado un array de números, utiliza el método filter para obtener un nuevo array que contenga solo los números pares.
  const pares = numbers.filter((num) => num % 2 == 0);
  console.log("Numeros pares", pares);

  //Dado un array de objetos que representan productos, utiliza el método filter para obtener un nuevo array que contenga solo los productos con un precio mayor a $50.
  const mayor50 = products.filter((product) => product.price > 50);
  console.log("Productos con precio mayor a 50", mayor50);

  //Dado un array de números, utiliza el método reduce para calcular la suma de todos los elementos.
  const total = numbers.reduce((acc, numero) => acc + numero, 0);
  console.log("Total", total);

  //Dado un array de objetos que representan productos, utiliza el método reduce para calcular el precio total de todos los productos.
  const precioTotal = products.reduce((acc, product) => {
    return acc + product.price;
  }, 0);
  console.log("Precio Total", precioTotal);

  //Dado un array de números, utiliza el método forEach para imprimir cada número en la consola.
  numbers.forEach((num) => console.log(num));

  //Dado un array de nombres, utiliza el método forEach para mostrar un saludo personalizado para cada nombre en la consola.
  nombres.forEach((nombre) => console.log("Hola,", nombre));

  //Dado un array de números, utiliza el método some para comprobar si al menos uno de los números es positivo.
  if (numbers.length > 0) {
    let hayPositivo = numbers.some((num) => num > 0);
    console.log("Alguno es Positivo?", hayPositivo);
  }

  //Dado un array de objetos que representan productos, utiliza el método some para comprobar si hay algún producto en oferta (con descuento).
  if (numbers.length > 0) {
    console.log(
      "Alguno en descuento",
      products.some((product) => product.enDescuento)
    );
  }

  //Dado un array de números, utiliza el método every para comprobar si todos los números son mayores a 0.
  if (numbers.length > 0) {
    let todosSonMayores = numbers.every((num) => num > 0);
    console.log("Todos son mayores a 0", todosSonMayores);
  }

  //Dado un array de objetos que representan estudiantes, utiliza el método every para comprobar si todos los estudiantes han aprobado (nota mayor o igual a 60).
  if (students.length > 0) {
    let todosHanAprobado = students.every((student) => student.grade >= 60);
    console.log(
      "¿Todos Han obtenido una nota mayor o igual a 60?",
      todosHanAprobado
    );
  }
}
