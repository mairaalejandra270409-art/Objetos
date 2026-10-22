//Leer el nombre, la edad, el número de ficha y el programa de un aprendiz, y guardarlos en un
//objeto. Agregar al objeto una propiedad mayorDeEdad con true o false según la edad.
//Mostrar la ficha.
function leerAprendiz(){
    let nombre= prompt("Nombre");
    let edad= parseInt(prompt("Edad:"));
    let ficha= prompt("numero der ficha:");
    let programa= prompt("programa:");

    return{
        nombre: nombre,
        edad: edad,
        ficha: ficha,
        programa: programa,
        mayordeEdad: edad >= 18
    };
    
}


function mostrarficha(aprendiz){
console.log("Ficha del aprendiz");
console.log("Nombre:"+ aprendiz.nombre);
console.log("Edad:" + aprendiz.edad +"años");
console.log("Ficha:" + aprendiz.ficha);
console.log("Programa:"+ aprendiz.programa);
console.log("Mayor de edad:" + aprendiz.mayordeEdad ? "si" : "no");
}

let aprendiz= leerAprendiz();
