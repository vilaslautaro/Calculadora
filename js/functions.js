// funcion que agrega el numero seleccionado por el usuario, lo convierte en un string y lo agrega a lo que ya agrego anteriormente el usuario
function agregarNumero(num) {
    operacionActual = operacionActual.toString() + num.toString()
    actualizarDisplay()
}

//  funcion que muestra el valor actual en pantalla
function actualizarDisplay() {
    display.value = operacionActual
}

// funcion que borra el ultimo valor ingresado por el usuario
function clear() {
    operacionActual = operacionActual.slice(0, -1)
}

// funcion que reseteala calculadora, osea pone la calculadora en 0
function clearAll() {
    operacionActual = ''
    operacionAnterior = ''
    operacion = undefined
}

// se ejecuta al hacer click en un boton de operador
function operacionSeleccionada(op) {
    // si el usuario anteriormente, no inserto ningun numero, va a dar un valor vacio
    if (operacionActual === '') return
    // en cambio si inserto un numero anteriormente, se va a ejecutar la funcion calcular
    if (operacionAnterior !== '') {
        calcular()
    }
    // convertimos el operador en un string
    operacion = op.toString()
    // pasamos el valor que teniamos actualmente, como valor anterior, para que el proximo numero q ingrese el usuario sea el valor actual
    // asi poder realizar el calculo con 2 valores diferentes
    operacionAnterior = operacionActual
    operacionActual = ''
}

// funcion que realiza los calculos segun lo ingresado por el usuario
function calcular() {
    let calculo
    // convertimos los valores a tipo numero ya que vienen como strings
    const anterior = parseFloat(operacionAnterior)
    const actual = parseFloat(operacionActual)
    // si no son numeros no retornamos nada
    if (isNaN(anterior) || isNaN(actual)) return
    // si son numeros, ejecutamos el calculo segun el operador seleccionado por el usuario
    switch (operacion) {
        case '+':
            calculo = anterior + actual
            break
        case '-':
            calculo = anterior - actual
            break
        case '/':
            calculo = anterior / actual
            break
        case 'x':
            calculo = anterior * actual
            break
        default:
            return
    }
    // mostramos el resultado (que fue guardado en la variable calculo)
    operacionActual = calculo
    // reiniciamos los valores de operacion y operacionAnterior
    operacion = undefined
    operacionAnterior = ''
}

// segun el valor del localStorage ejecutamos o no el tema que haya quedado guardado de la ultima visita del usuario
function localStorageTema() {
    if (localStorage.getItem('tema') === 'white') {
       document.body.classList.replace('dark', 'white')
    }
    else if (localStorage.getItem('tema') === 'violet') {
       document.body.classList.replace('dark', 'violet')
    }
    else if (localStorage.getItem('tema') === 'dark') {
       document.body.classList.replace('dark', 'dark')
    }
 }
 // ejecutamos el localStorage para saber cual fue el tema preferido del usuario
 localStorageTema()

