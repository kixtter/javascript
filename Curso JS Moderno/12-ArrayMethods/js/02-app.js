const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 700 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes, i) =>
{
    if (mes === "Diciembre")
    {
        console.log(`Encontrado en el índice ${i}`);
    }
});

//Encontrar el índice de Abril
const indice = meses.findIndex(mes => mes === "Abril");
console.log(indice);

const indice2 = meses.findIndex(mes => mes === "Diciembre");
console.log(indice2);


const indiceProducto = carrito.findIndex(producto => producto.nombre === "Televisión");
console.log(indiceProducto);

const indiceProducto2 = carrito.findIndex(producto => producto.precio === 700);
console.log(indiceProducto2);
