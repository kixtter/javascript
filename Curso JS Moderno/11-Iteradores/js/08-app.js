//for in
// const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

// for (let pendiente in pendientes)
// {
//     console.log(pendiente);
// }



//for of: itera sobre arreglos, es una versión simplificada del 'for' tradicional
//for in: itera sobre objetos, sobre todos los elementos que tiene un objeto



const automovil =
{
    modelo: 'Camaro',
    year: 1969,
    motor: 6.0
}

for (let propiedad in automovil)
{
    console.log(propiedad);//de esta forma se consigue el nombre de la propiedad
    console.log(automovil[propiedad]);//de esta forma se consigue el valor de la propiedad
}

console.log(`------------------------------------------------------`);

for (let [llave, valor] of Object.entries(automovil))
{
    console.log(valor);
    console.log(llave);
}