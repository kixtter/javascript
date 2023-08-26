// for (let i = 0; i <= 10; i++)
// {
//     if (i === 5)
//     {
//         console.log(`CINCO`);
//         continue;
//     }
//     console.log(`Número ${i}`);
// }

const carrito = 
[
    {nombre: "Monitos 27 Pulgadas", precio: 500},
    {nombre: "Television", precio: 600},
    {nombre: "Tablet", precio: 100, descuento: true},
    {nombre: "Celular", precio: 800},
    {nombre: "Teclado", precio: 700},
    {nombre: "Mouse", precio: 100},
]

for (let i = 0; i < carrito.length; i++)
{
    if (carrito[i].descuento)
    {
        console.log(`El artículo ${carrito[i].nombre} tiene descuento`);
        continue;//uso de break y continue
    }

    console.log(carrito[i].nombre);
}