var datosDinero = {
  dinero: 0,
};

var datosCobre = {
  cobre: 0,
  cobrePorClick: 1,
  cobreCostoMinero: 50,
};
var datosHierro = {
  hierro: 0,
  hierroPorClick: 1,
};
var datosOro = {
  oro: 0,
  oroPorClick: 1,
};

function minarCobre() {
  datosCobre.cobre += datosCobre.cobrePorClick;
  document.getElementById("cantidadCobre").innerHTML =
    "Cantidad de Cobre: " + datosCobre.cobre;
}

function venderCobre() {
  datosDinero.dinero += datosCobre.cobre * 1;
  datosCobre.cobre = 0;
  document.getElementById("dineroEnCuenta").innerHTML =
    "Dinero: $" + datosDinero.dinero;
  document.getElementById("cantidadCobre").innerHTML =
    "Cantidad de Cobre: " + datosCobre.cobre;
}

function minarHierro() {
  datosHierro.hierro += 1;
  document.getElementById("cantidadHierro").innerHTML =
    "Cantidad de Hierro: " + datosHierro.hierro;
}

function venderHierro() {
  datosDinero.dinero += datosHierro.hierro * 2;
  datosHierro.hierro = 0;
  document.getElementById("dineroEnCuenta").innerHTML =
    "Dinero: $" + datosDinero.dinero;
  document.getElementById("cantidadHierro").innerHTML =
    "Cantidad de Hierro: " + datosHierro.hierro;
}

function minarOro() {
  datosOro.oro += 1;
  document.getElementById("cantidadOro").innerHTML =
    "Cantidad de Oro: " + datosOro.oro;
}

function venderOro() {
  datosDinero.dinero += datosOro.oro * 3;
  datosOro.oro = 0;
  document.getElementById("dineroEnCuenta").innerHTML =
    "Dinero: $" + datosDinero.dinero;
  document.getElementById("cantidadOro").innerHTML =
    "Cantidad de Oro: " + datosOro.oro;
}

function comprarMineroCobre() {
  if (datosDinero.dinero >= datosCobre.cobreCostoMinero) {
    datosCobre.cobrePorClick++;
    datosDinero.dinero -= datosCobre.cobreCostoMinero;
    document.getElementById("dineroEnCuenta").innerHTML =
      "Dinero: $" + datosDinero.dinero;
  } else {
    window.alert("Dinero insuficiente");
  }
}

var mainGameLoop = window.setInterval(function () {}, 1000);
