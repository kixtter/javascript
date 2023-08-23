const usuario = false;
const puedePagar = false;

if (usuario && puedePagar)
{
    console.log(`Si puedes comprar`);
}
else if (!usuario && !puedePagar)
{
    console.log(`No puedes hacer compras`);
}
else if (!usuario)
{
    console.log(`Inicia Sesión o Registrate`);
}
else if (!puedePagar)
{
    console.log(`Fondos insuficientes`);
}