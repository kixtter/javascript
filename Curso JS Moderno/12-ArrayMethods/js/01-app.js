const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Comprobar si un valor existe en un arreglo
meses.forEach((mes) =>
{
    if (mes === "Enero")
    {
        console.log(`Enero si existe`);
    }
});

//.includes() solo funciona para arreglos sencillos como el arreglo de meses
const resultado = meses.includes("Diciembre");//retorna un boolean dependiendo de sí existe el elemento en cuestión
console.log(resultado);

//En un arreglo de objetos se utiliza .some()
const existe = carrito.some((producto) =>
{
    return producto.nombre === "Monitor Curvo";
});
console.log(existe);

//En un arreglo tradicional con .some()
const existe2 = meses.some(mes => mes === "Noviembre");
console.log(existe2);