//Operador Mayor que y Menor que
const dinero = 100;
const totalPagar = 500;
const tarjeta = false;
const cheque = false;

if (dinero >= totalPagar)
{
    console.log(`Si podemos pagar`);
}
else if (cheque)
{
    console.log(`Si, tengo un cheque`);
}
else if (tarjeta)
{
    console.log(`Si puedo pagar, tengo la tarjeta`);
}
else
{
    console.log(`Fondos insuficientes`);
}