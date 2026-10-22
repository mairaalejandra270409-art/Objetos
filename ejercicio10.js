//Parte A. Copia este código y, antes de ejecutarlo, escribe en un comentario lo que crees que
//imprime la última línea y por qué. Después ejecútalo. Si te equivocaste, explica en otro
//comentario qué fue lo que no viste. Equivocarse aquí no resta: dejarlo sin explicar sí.
//Parte B. Escribe una función que haga una copia completa del pedido, de modo que cambiar el
//barrio de la copia no afecte el original. Pruébala.

function clonarEntrega(entrega) {
    return {
        barrio: entrega.barrio,
        hora: entrega.hora
    };
}

function clonarPedido(pedido) {
    return {
        cliente: pedido.cliente,
        total: pedido.total,
        entrega: clonarEntrega(pedido.entrega)
    };
}

let pedidoOriginal = { cliente: "Ana", total: 30000, entrega: { barrio: "Centro", hora: "7:00 pm" } };
let copiaReal = clonarPedido(pedidoOriginal);

copiaReal.entrega.barrio = "La Playa";

console.log("Barrio del original: " + pedidoOriginal.entrega.barrio);
console.log("Barrio de la copia: " + copiaReal.entrega.barrio);