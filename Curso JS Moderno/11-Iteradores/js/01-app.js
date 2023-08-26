// for (let i = 0; i <= 10; i++)
// {
//     console.log(`Número ${i}`);
// }

// let par = "";
// let impar = "";
// for (let i = 0; i<= 20; i++)
// {
//     if ((i % 2) === 1)
//     {
//         impar += `${i},`
//     }
//     else
//     {
//         par += `${i},`
//     }
// }

// console.log(`Números pares: ${par.substring(0, par.length - 1)}`);
// console.log(`Números impares: ${impar.substring(0, impar.length - 1)}`);

const carrito = 
[
    {nombre: "Monitos 27 Pulgadas", precio: 500},
    {nombre: "Television", precio: 600},
    {nombre: "Tablet", precio: 100},
    {nombre: "Celular", precio: 800},
    {nombre: "Teclado", precio: 700},
    {nombre: "Mouse", precio: 100},
]

for (let i = 0; i < carrito.length; i++)
{
    console.log(`El artículo ${carrito[i].nombre} tiene un precio de $${carrito[i].precio}`);
}