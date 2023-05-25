const producto = 'Monitor 20 Pulgadas';

//.replace para reemplazar
console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

//.slice para cortar
console.log(producto.slice(0, 10));
// console.log(producto.slice(8));
console.log(producto.slice(2,1));//No hace algo
// console.log(producto.slice(0, producto.indexOf('20')));

//.substring alternativa a slice
console.log(producto.substring(0, 10));
console.log(producto.substring(4, 2));//Invierte los numeros para su uso correcto

const usuario = 'Yander';
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));