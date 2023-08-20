function sumar(a, b)//a y b son parámetros
{
    console.log(a + b);
}

sumar(2, 3);//2 y 3 son argumentos
sumar(200, 184);

function saludar(nombre = "'Sin Nombre'", apellido = "'Sin Apellido'")
{
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Yander", "Avila");
saludar("Yander");
saludar();
