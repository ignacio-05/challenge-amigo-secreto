// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para almacenar los nombres
let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');

//Funcion para agregar amigo a la lista
function agregarAmigo() {
    let ingresoNombre = document.getElementById('amigo').value; 

    if ( ingresoNombre !== '' && ingresoNombre !== null && isNaN(ingresoNombre) ) {

        amigos.push(ingresoNombre); //Ingresa nombre al array

        actualizarLista(); 

        limpiarCaja(); 
    }else {
        alert('Por favor, Ingrese un nombre valido');
        limpiarCaja();
    }
}

//Funcion que se encarga de modificar la lista al agregar un nombre
function actualizarLista() {
    listaAmigos.innerHTML = '';

    //Recorrer el array con un for
    for( let i = 0; i<amigos.length; i++ ) {
        const li = document.createElement('li'); //Crea el elemento lista
        li.innerHTML = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//Funcion que se encarga de limpiar el input
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

//Funcion que elije un nombre de manera aleatoria
function sortearAmigo() {
    let indice = Math.floor(Math.random() * amigos.length);
    listaAmigos.innerHTML = amigos[indice];
}






 


 