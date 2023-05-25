const producto = 'Monitor 20 Pulgadas';

//.repeat() te permite repetir una cadena de texto 'n' veces
const promocion = ' en promoción'.repeat(3);
console.log(promocion);
console.log(`${producto}${promocion}!!!!!`);

//.split permite dividir una cadena de texto
const actividad = "Estoy aprendiendo Javascript Moderno";
console.log(actividad.split(" "));

const hobbies = "Leer, caminar, escuchar música, escribir, aprender a programar";
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split('#'));