const diaHoy = new Date();
let valor;

valor = diaHoy;
valor = diaHoy.getFullYear();
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();//Milisegundos transcurridos desde 1 Enero 1970
valor = diaHoy.setFullYear(2010);


console.log(diaHoy);