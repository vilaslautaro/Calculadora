// recorremos los botones de numeros, y le agregamos un evento que al numero que hagamos click, ejecuta la funcion agregarNumero con el valor del numero que hicimos click
btnNumeros.forEach(numero => {
   numero.addEventListener('click', () => agregarNumero(numero.innerText))
})

// recorremos los botones de operadores, y le agregamos un evento que al operador que hagamos click, ejecuta la funcion operacionSeleccionada con el valor del operador que hicimos click
btnOperadores.forEach(operador => {
   operador.addEventListener('click', () => operacionSeleccionada(operador.innerText))
});

// evento que al hacer click en el boton "=" ejecuta la funcion de calcular
btnIgual.addEventListener('click', () => {
   calcular()
   actualizarDisplay()
})

// evento que al hacer click en el boton "del" llama a funcion que borra el ultimo numero ingresado por el usuario
btnBorrar.addEventListener('click', () => {
   clear()
   actualizarDisplay()
})

// evento que al hacer click en el boton RESET, llama a funcion que reinicia la calculadora a 0
btnReset.addEventListener('click', () => {
   clearAll()
   actualizarDisplay()
})

// cambiar colores de la calculadora segun la clase que tenga
btnToggle.addEventListener('click', () => {
   if (body.className === 'dark') {
      body.classList.replace('dark', 'white')
      // guardamos la clase en el local
      localStorage.setItem('tema', 'white')
   } else if (body.className === 'white') {
      body.classList.replace('white', 'violet')
      // guardamos la clase en el local
      localStorage.setItem('tema', 'violet')
   } else if (body.className === 'violet') {
      localStorage.setItem('tema', 'dark')
      // guardamos la clase en el local
      body.classList.replace('violet', 'dark')
   }
})