const cliente = {
    nombre: 'Yander',
    saldo: 500
}

console.log(cliente);
console.log(typeof cliente);

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const yander = new Cliente('Yander', 500);

console.log(yander);