//Reescribe el ejercicio 5 sin for...in: usa Object.keys, Object.values y métodos de array.
//La salida debe ser idéntica. En un comentario responde: ¿qué función del ejercicio 5
//desapareció por completo y por qué?

function calcularPromedioObjeto(objeto) {
    let valores = Object.values(objeto);
    if (valores.length === 0) return 0;
    let suma = valores.reduce((acc, curr) => acc + curr, 0);
    return suma / valores.length;
}

function buscarClaveMayor(objeto) {
    let claves = Object.keys(objeto);
    return claves.reduce((mayor, clave) => objeto[clave] > objeto[mayor] ? clave : mayor, claves[0]);
}

function filtrarClavesMenores(objeto, limite) {
    return Object.keys(objeto).filter(clave => objeto[clave] < limite);
}

let notas = { matematicas: 4.2, ingles: 3.1, programacion: 4.8, etica: 3.9 };

Object.keys(notas).forEach(materia => {
    console.log(materia + ": " + notas[materia]);
});

console.log("Promedio: " + calcularPromedioObjeto(notas).toFixed(1));
console.log("Mejor materia: " + buscarClaveMayor(notas));
console.log("Por reforzar: " + filtrarClavesMenores(notas, 3.5).join(", "));