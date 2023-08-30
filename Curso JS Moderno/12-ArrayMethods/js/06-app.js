const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 700 },
    { nombre: 'Celular', precio: 700 },
];

//revisa que todos los elementos del arreglo cumplan con la condición
const resultado = carrito.every(producto => producto.precio < 500);//todos deben cumplir la condición para regresar true
console.log(resultado);


const resultado2 = carrito.some(producto => producto.precio < 500);//con que solo algunos cumplas la condición regresa true
console.log(resultado2);

