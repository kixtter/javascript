//Métodos de propiedad
const reproductor = 
{
    nuevaCancion: ``,
    reproducir: id => `Reproduciendo canción con el id ${id}`,
    pausar: () => console.log(`Pausando...`),
    borrar: id => console.log(`Borrando canción... ${id}`),
    nuevaListaReproduccion: nombreListaReproduccion => console.log(`Nueva lista de reproducción creada: ${nombreListaReproduccion}`),
    reproducirLista: id => `Reproduciendo lista ${id}`,

    set nuevaCancion(cancion)
    {
        this.cancion = cancion;
        console.log(`Añadiendo ${this.cancion}`);
    },
    get obtenerCancion()
    {
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = "Secreto de amor";
reproductor.obtenerCancion;

console.log(reproductor.reproducir(30));
console.log(reproductor.reproducir(20));
reproductor.pausar();
reproductor.borrar(30);
reproductor.nuevaListaReproduccion(`Gym`);
console.log(reproductor.reproducirLista(50));
