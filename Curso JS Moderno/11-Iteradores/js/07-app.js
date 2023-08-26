//for of
const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

const carrito = 
[
    {nombre: "Monitos 27 Pulgadas", precio: 500},
    {nombre: "Television", precio: 600},
    {nombre: "Tablet", precio: 100},
    {nombre: "Celular", precio: 800},
    {nombre: "Teclado", precio: 700},
    {nombre: "Mouse", precio: 100},
]

for (let pendiente of pendientes)
{
    console.log(pendiente);
}

for (let producto of carrito)
{
    console.log(producto.nombre);
}