//Parte A. Con este objeto de códigos de aeropuerto:
//let codigos = { bogota: "BOG", medellin: "MDE", bucaramanga: "BGA", cali: "CLO" };
//Construir un objeto invertido (código: ciudad). El usuario escribe códigos hasta "fin" y el
//programa dice a qué ciudad corresponden.
//Parte B. Ahora invierte este objeto de zonas de reparto, donde un valor se repite:
//let zonas = { centro: "A", laPlaya: "B", pabloVI: "A" };
//Si lo inviertes como en la parte A, se pierde un barrio. Escribe otra función que agrupe: cada
//zona debe guardar un array con todos sus barrios.

function invertir(objeto) {
    let invertido = {};
    Object.entries(objeto).forEach(([clave, valor]) => {
        invertido[valor] = clave;
    });
    return invertido;
}

function invertirAgrupando(objeto) {
    let invertido = {};
    Object.entries(objeto).forEach(([clave, valor]) => {
        if (invertido[valor] === undefined) {
            invertido[valor] = [clave];
        } else {
            invertido[valor].push(clave);
        }
    });
    return invertido;
}

console.log("Parte A ");
let codigos = { bogota: "BOG", medellin: "MDE", bucaramanga: "BGA", cali: "CLO" };
let codigosInvertidos = invertir(codigos);

while (true) {
    let cod = prompt("Código: (o escribe 'fin')");
    if (!cod || cod.toLowerCase() === "fin") break;

    let codUpper = cod.toUpperCase();
    if (codigosInvertidos[codUpper]) {
        console.log(codUpper + ": " + codigosInvertidos[codUpper]);
    } else {
        console.log("No hay ciudad con el código " + codUpper);
    }
}

console.log("\nParte B ");
let zonas = { centro: "A", laPlaya: "B", pabloVI: "A" };
let zonasAgrupadas = invertirAgrupando(zonas);

Object.entries(zonasAgrupadas).forEach(([zona, barrios]) => {
    console.log(zona + ": " + barrios.join(", "));
});