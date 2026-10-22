//El programa arranca con el menú de precios:
//let precios = { arepa: 3500, empanada: 2500, jugo: 4000, tinto: 1500 };
//El usuario agrega productos y cantidades hasta escribir "fin". Los productos se guardan en un
//objeto items (producto: cantidad). Si pide un producto que ya estaba, la cantidad se suma. Si
//no está en el menú, se rechaza. Al final se muestra el detalle, el subtotal, el domicilio ($3000 si
//el subtotal es menor a $20000; si no, gratis) y el total.

function agregarItem(items, producto, cantidad) {
    if (items[producto] === undefined) {
        items[producto] = cantidad;
    } else {
        items[producto] += cantidad;
    }
}

function calcularSubtotal(items, precios) {
    let subtotal = 0;
    for (let prod in items) {
        subtotal += items[prod] * precios[prod];
    }
    return subtotal;
}

function calcularDomicilio(subtotal) {
    return subtotal >= 20000 ? 0 : 3000;
}

let precios = { arepa: 3500, empanada: 2500, jugo: 4000, tinto: 1500 };
let items = {};

while (true) {
    let prod = prompt("Producto: (o escribe 'fin')");
    if (!prod || prod.toLowerCase() === "fin") break;

    let prodLwr = prod.toLowerCase();
    if (!(prodLwr in precios)) {
        console.log(prodLwr + " no está en el menú");
        continue;
    }

    let cant = parseInt(prompt("Cantidad:"));
    agregarItem(items, prodLwr, cant);
}

console.log("Detalle:");
for (let prod in items) {
    let sub = items[prod] * precios[prod];
    console.log(prod + " x" + items[prod] + " = $" + sub);
}

let subtotal = calcularSubtotal(items, precios);
let domicilio = calcularDomicilio(subtotal);
let total = subtotal + domicilio;

console.log("Subtotal: $" + subtotal);
console.log("Domicilio: $" + domicilio);
console.log("Total: $" + total);