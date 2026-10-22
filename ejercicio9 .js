//El programa arranca con estos dos objetos:
//let cliente = {
//nombre: "Laura Gómez",
//telefonos: ["3104567890", "6077241234"],
//direccion: { calle: "Calle 12 # 9-45", barrio: "Centro", ciudad: "San Gil" }
//};
//let clienteNuevo = { nombre: "Pedro Ruiz", telefonos: [] };
//Mostrar la ficha de cliente, leer un teléfono nuevo, un barrio y una calle nuevos, actualizar el
//objeto y volver a mostrar la ficha. Al final, mostrar la ciudad de clienteNuevo usando la misma
//función que con cliente, sin que el programa se rompa.

function mostrarFicha(cli) {
    console.log(cli.nombre);
    console.log("Teléfonos: " + (cli.telefonos.length > 0 ? cli.telefonos.join(", ") : "ninguno"));
    if (cli.direccion && cli.direccion.calle) {
        console.log("Dirección: " + cli.direccion.calle + ", " + cli.direccion.barrio + ", " + cli.direccion.ciudad);
    } else {
        console.log("Dirección: sin dirección");
    }
}

function cambiarDireccion(cli, calle, barrio) {
    if (!cli.direccion) {
        cli.direccion = {};
    }
    cli.direccion.calle = calle;
    cli.direccion.barrio = barrio;
}

function obtenerCiudad(cli) {
    if (cli.direccion && cli.direccion.ciudad) {
        return cli.direccion.ciudad;
    }
    return "sin dirección";
}

let cliente = {
    nombre: "Laura Gómez",
    telefonos: ["3104567890", "6077241234"],
    direccion: { calle: "Calle 12 # 9-45", barrio: "Centro", ciudad: "San Gil" }
};
let clienteNuevo = { nombre: "Pedro Ruiz", telefonos: [] };

console.log("Antes");
mostrarFicha(cliente);

let nuevoTel = prompt("Nuevo teléfono:");
let nuevoBarrio = prompt("Nuevo barrio:");
let nuevaCalle = prompt("Nueva calle:");

cliente.telefonos.push(nuevoTel);
cambiarDireccion(cliente, nuevaCalle, nuevoBarrio);

console.log("Después");
mostrarFicha(cliente);
console.log("Ciudad de Pedro Ruiz: " + obtenerCiudad(clienteNuevo));
