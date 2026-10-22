//El programa arranca con este objeto:
//El usuario escribe qué dato quiere cambiar y el valor nuevo. Si la clave no existe, se avisa y no
//se crea. Se repite hasta que escriba "fin". Al final se muestra el perfil.


function existeClave(objeto, clave){
return clave in objeto;
}

function actualizarDato(objeto, clave, valor){
 objeto[clave] = valor;
}

function mostrarCliente(cliente){
 console.log("Perfil final:");
 console.log("Nombre:" + cliente.nombre);
 console.log("Telefono: "+ cliente.telefono);
console.log("Barrio:" + cliente.barrio);
console.log("Ciudad:" + cliente.ciudad);
}

let cliente = { nombre: "Jorge Díaz", telefono: "3001234567", barrio: "La Playa",
ciudad: "San Gil" };

while (true){
    let clave= prompt("Que dato quieres cambiar? nombre, telefono, barrio, ciudad (o escribe 'fin')");
    if(!clave || clave.toLowerCase() === "fin") break;
    if(existeClave(cliente, clave)){
        let valor= prompt("Nuevo Valor:");
        actualizarDato(cliente, clave, valor);
        console.log("Actualizado:"+ clave + "" + valor);
    } else{
        console.log("El dato" + clave + "no existe");
    }
}

mostrarCliente(cliente);