let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

function asignarTextElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto ;
    return;
}

function verificarIntento(){
    let numeroDeUsuario =parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextElemento('p', `Acertaste en el intento ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
         if(numeroDeUsuario > numeroSecreto){
            asignarTextElemento('p','El número secreto es menor');
         }else{
            asignarTextElemento('p','El número secreto es mayor');
         }
         intentos++;
         limpiarCaja();
    }
    return;
}

function  generarNumeroSecreto() {
   let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   //si ya sorteamos todos los nuemros
   if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextElemento('p','Ya se sortearon todos los numeros posibles')
    document.getElementById('reiniciar').removeAttribute('disabled');
   }else{
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
     }else{
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;    
     }
   } 
   listaNumerosSorteados.slice(0,10);
   document.getElementById('reiniciar').setAttribute('disabled','true');
   generarNumeroSecreto();
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value ="";
   
}
function condicionesIniciales(){
    asignarTextElemento('h1','Juego del numero secreto');
    asignarTextElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function  reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de nuemros
    condicionesIniciales();
    //Deshanilitar  el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

function empezarjuego(){
    if(listaNumerosSorteados.length == numeroMaximo){

    }
}

condicionesIniciales();
