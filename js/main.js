
//Empezar validacion con funcion
function verificadorEdad() {

    let personas = [];
    let quieresContinuar = true;
    while (quieresContinuar){
        let nombre = prompt("FAVOR INGRESA TU NOMBRE: ");
        let edad = parseInt(prompt("INGRESA TU EDAD: "));
        
        //Ingresar edad valida
        if (isNaN(edad) || edad <= 0) {
            alert("Por favor ingresa una edad valida.");
            return;
        }
        let persona={
            "nombre": nombre,
            "edad": edad 
        }
        personas.push(persona)
        quieresContinuar = confirm("¿Quieres validar otra edad?");
    
    
    }
    for ( let i = 0; i < personas.length; i++ ) {
        let edad = personas[i].edad
        let mensaje = evaluarEdad(edad);
        alert(`Hola ${personas[i].nombre}, ${mensaje}` )

    }
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
verificadorEdad();

