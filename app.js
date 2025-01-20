// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
amigos = [];
amigosMayus = [];
const listaAmigos = document.getElementById('listaAmigos');

//Boton para agregar amigos
function agregarAmigo(){
    amigo = document.getElementById('amigo').value
    verificarIngreso(amigo);
    if(verificarRepetido(amigo) == true){
        alert('Este amigo ya fue ingresado, por favor ingresa uno distinto.');
    }else{
        amigos.push(amigo);
        imprimirAmigo();
        document.getElementById('amigo').value = '';
        }
    amigosMayus.push(amigo.toUpperCase());
}

//Boton para sortear amigo
function sortearAmigo(){
    let numero = Math.floor(Math.random() * amigos.length);
    if (verificarSorteo() == true){
        amigoGanador(amigos[numero]);
    }
}

function imprimirAmigo(){
    document.getElementById('listaAmigos').innerHTML = '';
    for(i = 0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function amigoGanador(resultado){
    document.getElementById('resultado').innerHTML = resultado;
}
//Boton para nuevo sorteo
function nuevoSorteo(){
    amigos = [];
    amigosMayus = [];   
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}

function verificarIngreso(amigo){
    if(amigo == ""){
        alert('Por favor, inserte un nombre.');
    }
}

function verificarSorteo(){
    if(amigos.length >= 2){
        return true;
    }
    alert('Por favor, ingrese al menos dos amigos para sortear.');
    return false;
}

function verificarRepetido(amigo){
    if(amigosMayus.includes(amigo.toUpperCase())){
        return true;
    }
    return false;
}