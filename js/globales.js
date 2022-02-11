// toggle
const btnToggle = document.getElementById('toggleBtn')

// display
const display = document.getElementById('display')

// botones
const btnReset = document.getElementById('resetear')
const btnBorrar = document.getElementById('borrar')
const btnIgual = document.getElementById('igual')

// array botones
const btnNumeros = document.querySelectorAll('.key-number')
const btnOperadores = document.querySelectorAll('.key-operator')


let operacionActual = "";
let operacionAnterior = "";
let operacion = undefined;
