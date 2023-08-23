//Switch Case
const metodoPago = "Efectivo";

switch (metodoPago)
{
    case "Efectivo":
        pagar(metodoPago);
        break;
    case "Cheque":
        pagar(metodoPago);
        break;
    case "Tarjeta":
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log(`No has seleccionado método de pago o éste no es soportado`);
        break;
}

function pagar (metodoPago)
{
    console.log(`Pagaste con ${metodoPago}`);
}