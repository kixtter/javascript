"use strict";

const producto = 
{
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//No permite agregar, modificar o eliminar los elementos del objeto
Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);
console.log(Object.isFrozen(producto));