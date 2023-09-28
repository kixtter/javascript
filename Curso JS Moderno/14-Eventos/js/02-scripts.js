const nav = document.querySelector(".navegacion");

nav.addEventListener("mouseout", () =>
{
    console.log("saliendo de la navegación");
    nav.style.backgroundColor = "transparent";
});

nav.addEventListener("dblclick", () =>
{
    console.log("Entrando en la navegación");
    nav.style.backgroundColor = "white";
});

//mousedown - similar al click
//click
//dblclick - doble click
//mouseup - cuando sueltas el mouse