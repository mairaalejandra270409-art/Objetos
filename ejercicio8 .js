//El programa arranca con este inventario:
//let inventario = { arepas: 20, empanadas: 35, jugos: 15, tintos: 40 };
//Se registran ventas: producto y cantidad, hasta que el producto sea "fin". Si el producto no
//existe o no hay suficiente, se avisa y no se modifica nada. Al final se muestra el inventario y los
//productos agotados.

function vender(inventario, producto, cantidad) {
    if (!(producto in inventario)) {
        return "No vendemos " + producto;
    }
    if (inventario[producto] < cantidad) {
        return "Solo quedan " + inventario[producto] + " " + producto;
    }
    inventario[producto] -= cantidad;
    return "Vendidas " + cantidad + " " + producto + ". Quedan " + inventario[producto];
}

function obtenerAgotados(inventario) {
    let agotados = [];
    for (let prod in inventario) {
        if (inventario[prod] === 0) {
            agotados.push(prod);
        }
    }
    return agotados;
}

let inventario = { arepas: 20, empanadas: 35, jugos: 15, tintos: 40 };

while (true) {
    let prod = prompt("Producto: (o escribe 'fin')");
    if (!prod || prod.toLowerCase() === "fin") break;

    let cant = parseInt(prompt("Cantidad:"));
    let mensaje = vender(inventario, prod.toLowerCase(), cant);
    console.log(mensaje);
}

console.log("Inventario final:");
for (let p in inventario) {
    console.log(p + ": " + inventario[p]);
}

let agotados = obtenerAgotados(inventario);
console.log("Agotados: " + (agotados.length > 0 ? agotados.join(", ") : "ninguno"));
