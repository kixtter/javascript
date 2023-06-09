"use strict";

const producto = 
{
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//No permite agregar más elementos al objecto
//No permite eliminar elementos del objeto
//Solo permite modificar los elementos del objeto
Object.seal(producto);

producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);
console.log(Object.isSealed(producto));