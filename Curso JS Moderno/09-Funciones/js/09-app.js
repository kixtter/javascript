//Métodos de propiedad
const reproductor = 
{
    reproducir: function (id)
    {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function ()
    {
        console.log(`Pausando...`);
    },
    borrar: function (id) 
    {
        console.log(`Borrando canción... ${id}`);
    },
    nuevaListaReproduccion: function (nombreListaReproduccion)
    {
        console.log(`Nueva lista de reproducción creada: ${nombreListaReproduccion}`);
    },
    reproducirLista: function(id)
    {
        console.log(`Reproduciendo lista ${id}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.nuevaListaReproduccion(`Gym`);
reproductor.reproducirLista(50);