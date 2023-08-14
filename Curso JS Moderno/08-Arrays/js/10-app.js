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
const nuevoArreglo = carrito.map( function(producto) {
    return `${producto.nombre} - Precio ${producto.precio}`;
});

const nuevoArreglo2 = carrito.forEach( function(producto) {
    return `${producto.nombre} - Precio ${producto.precio}`;
});

console.log(nuevoArreglo);
console.log(nuevoArreglo2);