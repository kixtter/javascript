//forEach
const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

pendientes.forEach((pendiente, index) =>
{
    console.log(`${index}: ${pendiente}`);
});

const carrito = 
[
    {nombre: "Monitos 27 Pulgadas", precio: 500},
    {nombre: "Television", precio: 600},
    {nombre: "Tablet", precio: 100},
    {nombre: "Celular", precio: 800},
    {nombre: "Teclado", precio: 700},
    {nombre: "Mouse", precio: 100},
]

const nuevoArreglo = carrito.forEach((producto, index) =>
{
    return `${index}: El producto ${producto.nombre} tiene un precio de ${producto.precio}`;
});

const nuevoArreglo2 = carrito.map((producto, index) =>
{
    return `${index}: El producto ${producto.nombre} tiene un precio de ${producto.precio}`;
});

console.log(nuevoArreglo);
console.log(nuevoArreglo2);