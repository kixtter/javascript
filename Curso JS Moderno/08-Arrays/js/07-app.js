const carrito = [];

//Definir un producto
const producto = 
{
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = 
{
    nombre: "Celular",
    precio: 800
}

const producto4 = 
{
    nombre: "Celular 2",
    precio: 350
}

//push() agrega al final del arreglo
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);

const producto3 = 
{
    nombre: "Teclado",
    precio: 50
}

//unshift() agrega al inicio del arreglo
carrito.unshift(producto3);
console.table(carrito);

// //Eliminar último elemento de un arreglo
// carrito.pop();
// console.table(carrito);

// //Eliminar del inicio del carrito
// carrito.shift();
// console.table(carrito);

//Eliminar en x posición de un arreglo