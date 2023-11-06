//VARIABLES
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

//EVENT LISTENERS
eventListeners();
function eventListeners () {
    formulario.addEventListener('submit', agregarTweet);
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
        //Crear el HTML
        const li = document.createElement('li');

        //Añadir el texto
        li.innerText = tweet.tweet;

        //Insertarlo en el HTML
        listaTweets.appendChild(li);
    });
}

//Limpiar el HTML
function limpiarHTML () {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}