//Con este inventario:
//let inventario = { arepas: 20, empanadas: 8, jugos: 0, tintos: 40, pandebonos: 5 };
//Objetos en JavaScript · Sesión 2 · Página 17
//Mostrar cuántos productos hay, el total de unidades, los productos con stock bajo (más de 0 y
//menos de 10) con su cantidad, y los agotados. Usa Object.entries, Object.values, filter
//y map; nada de for ni for...in.

function contarUnidades(inventario) {
    return Object.values(inventario).reduce((acc, curr) => acc + curr, 0);
}

function obtenerStockBajo(inventario) {
    return Object.entries(inventario).filter(par => par[1] > 0 && par[1] < 10);
}

function formatearPares(pares) {
    let textos = pares.map(par => par[0] + " (" + par[1] + ")");
    return textos.join(", ");
}

let inventario = { arepas: 20, empanadas: 8, jugos: 0, tintos: 40, pandebonos: 5 };

console.log("Productos: " + Object.keys(inventario).length);
console.log("Unidades en total: " + contarUnidades(inventario));

let stockBajo = obtenerStockBajo(inventario);
console.log("Stock bajo: " + formatearPares(stockBajo));

let agotados = Object.entries(inventario)
    .filter(par => par[1] === 0)
    .map(par => par[0]);
console.log("Agotados: " + agotados.join(", "));