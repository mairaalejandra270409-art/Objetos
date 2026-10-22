//Ejecuta esto y explica el resultado en un comentario:
//let a = { nombre: "Morral", precio: 85000 };
//let b = { nombre: "Morral", precio: 85000 };
//console.log(a === b);
//Después escribe una función que diga si dos objetos tienen exactamente las mismas claves
//con los mismos valores (solo un nivel, sin objetos adentro). Pruébala con los cuatro casos del
//ejemplo.

function contarClaves(objeto) {
    let contador = 0;
    for (let clave in objeto) {
        contador++;
    }
    return contador;
}

function sonIguales(a, b) {
    if (contarClaves(a) !== contarClaves(b)) {
        return false;
    }
    for (let clave in a) {
        if (a[clave] !== b[clave]) {
            return false;
        }
    }
    return true;
}

let a = { nombre: "Morral", precio: 85000 };
let b = { nombre: "Morral", precio: 85000 };
console.log("a === b :", a === b);

console.log("Caso 1, iguales:", sonIguales({ a: 1, b: 2 }, { a: 1, b: 2 }));
console.log("Caso 2, distinto precio:", sonIguales({ nombre: "Morral", precio: 85000 }, { nombre: "Morral", precio: 90000 }));
console.log("Caso 3, a tiene menos claves que b:", sonIguales({ a: 1 }, { a: 1, b: 2 }));
console.log("Caso 4, mismas claves en otro orden:", sonIguales({ a: 1, b: 2 }, { b: 2, a: 1 }));