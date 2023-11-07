//VARIABLES
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

//EVENT LISTENERS
eventListeners();
function eventListeners () {
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];

        crearHTML();
    });
}

//FUNCIONES
function agregarTweet (e) {
    e.preventDefault();
    
    //Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    
    //validación...
    if (tweet === '') {
        mostrarError('Un mensaje no puede ir vacío');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet//cuando la llave y la variable tiene el mismo nombre es posible ahorrar la declaración (tweet: tweet)
    }

    //Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    //Una vez agregado vamos a crear el HTML
    crearHTML();

    //Reiniciar el formulario
    formulario.reset();
}

//Mostrar mensaje de error
function mostrarError (error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertarlo en el contenedor
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Elimina la alerta después de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

//Muestra un listado de los tweets
function crearHTML () {
    limpiarHTML();

    if (tweets.length === 0) {
        return;
    }

    tweets.forEach(tweet => {
        //Agregar un botón de eliminar
        const btnEliminar = document.createElement('a');
        btnEliminar.classList.add('borrar-tweet');
        btnEliminar.innerText = 'X';

        //Añadir la función de eliminar
        btnEliminar.onclick = () => {
            borrarTweet(tweet.id);//Para enviar los argumentos hay que hacerlo de esta forma
        }

        //Crear el HTML
        const li = document.createElement('li');

        //Añadir el texto
        li.innerText = tweet.tweet;

        //Asignar el botón
        li.appendChild(btnEliminar);

        //Insertarlo en el HTML
        listaTweets.appendChild(li);
    });

    sincronizarStorage();
}

//Agregar los tweets actuales a local storage
function sincronizarStorage () {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Eliminar un tweet
function borrarTweet (id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}

//Limpiar el HTML
function limpiarHTML () {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}