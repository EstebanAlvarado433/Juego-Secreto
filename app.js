let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  //console.log(numeroSecreto);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos} ${intentos == 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El Usuario no acerto
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }

  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  //Si ya sorteamos todos los numeros
  if (listaNumeroSorteados.length == numeroMaximo) {
  } else {
    if (listaNumeroSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumeroSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
  // si el numero generado esta includo en la lista
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego de numero Secreto");
  asignarTextoElemento("p", `Indica un numero entre 1 y ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //Indicar mensaje de intervalo de numeros
  //Generar el Numero Aletorio
  //Inicializar el numero intentos
  condicionesIniciales();
  //Deshabilitar el boton de nuevo Juego
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
