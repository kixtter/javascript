function sumar(a,b)
{
    return a + b;
}

const resultado = sumar(5, 2);
console.log(resultado);

//Ejemplo
let total = 0;

function agregarCarrito(precio)
{
    return total += precio;
}

function calcularImpuesto(total)
{
    return total * 1.16;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

const pagoTotal = calcularImpuesto(total);

console.log(`El total a pagar es de $${pagoTotal}`);
// console.log(total);