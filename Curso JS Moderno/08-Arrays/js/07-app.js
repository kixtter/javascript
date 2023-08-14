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
    precio: 100
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

// //Eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito);

//Eliminar un elemento indicando su posición y cantidad a eliminar
carrito.splice(1, 1);//(Indicar la posición desde dónde empezará el borrado, indicar la cantidad de elementos a eliminar)
console.table(carrito);