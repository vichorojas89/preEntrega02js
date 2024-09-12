
//Empezar validacion con funcion
function validarEdad() {

    //Captura de entradas del usuario
    const nombre = prompt("Por favor, ingresa tu nombre:");
    const edad = parseInt(prompt("Por favor, ingresa tu edad:"));

    //Ingresar edad valida
    if (isNaN(edad) || edad <= 0) {
        alert("Por favor ingresa una edad valida.");
        return;
    }
    //Validar mas personas y edades
    let quieresContinuar = confirm("¿Quieres validar otra edad?");
    if (quieresContinuar === true) {
        validarEdad();
    } else {
        alert("Muchas gracias por la informacion");
    }


    //Procesamiento de la informacion ingresada
    const resultado = evaluarEdad(edad);

    //Resultado de datos ingresados
    alert(`Hola ${nombre}, ${resultado}`);
}

//Evaluar edad
function evaluarEdad(edad) {
    if (edad < 18) {
        return "eres menor de edad.";
    } else if (edad >= 18 && edad < 60) {
        return "eres adulto.";
    } else {
        return "eres adulto mayor.";
    }
}

validarEdad();

