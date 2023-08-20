const carrito = 
[
    {nombre: "Monitos 27 Pulgadas", precio: 500},
    {nombre: "Television", precio: 600},
    {nombre: "Tablet", precio: 100},
    {nombre: "Celular", precio: 800},
    {nombre: "Teclado", precio: 700},
    {nombre: "Mouse", precio: 100},
]

//.map() genera un nuevo arreglo
const nuevoArreglo = carrito.map( (producto) => 
{
    return `${producto.nombre} - Precio ${producto.precio}`;
});

carrito.forEach( (producto) => 
{
    return console.log(`${producto.nombre} - Precio ${producto.precio}`);
});

console.log(nuevoArreglo);