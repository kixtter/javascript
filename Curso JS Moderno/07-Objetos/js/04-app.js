const producto = 
{
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

// const nombre = producto.nombre;
// console.log(nombre);

//Destructuring
const {nombre, disponible, precio} = producto;
console.log(nombre);
console.log(disponible);
console.log(precio);