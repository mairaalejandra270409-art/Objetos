//Leer el nombre del cliente y la cantidad de adultos, y crear una reserva con la actividad "Rafting
//río Fonce" y seguro: true. Preguntar si van menores; si sí, agregar la propiedad menores con
//su cantidad. Preguntar si rechaza el seguro; si sí, eliminar la propiedad seguro. Calcular el
//total: $70000 por adulto, $50000 por menor y $8000 por persona si hay seguro. Mostrar solo los
//datos que existen en la reserva.

function crearReserva(cliente, adultos) {
  return {
    cliente: cliente,
    actividad: "Rafting río Fonce",
    adultos: adultos,
    seguro: true
  };
}

function calcularTotal(reserva) {
  let total = reserva.adultos * 70000;
  if ("menores" in reserva) total += reserva.menores * 50000;
  if ("seguro" in reserva) {
    const personas = reserva.adultos + ("menores" in reserva ? reserva.menores : 0);
    total += personas * 8000;
  }
  return total;
}

function mostrarReserva(reserva) {
  console.log("--- Reserva ---");
  console.log("Cliente: " + reserva.cliente);
  console.log("Actividad: " + reserva.actividad);
  console.log("Adultos: " + reserva.adultos);
  if ("menores" in reserva) console.log("Menores: " + reserva.menores);
  console.log("Seguro: " + ("seguro" in reserva ? "incluido" : "no incluido"));
  console.log("Total: $" + calcularTotal(reserva));
}

const nombreCliente = prompt("Cliente:");
const adultos = Number(prompt("Cantidad de adultos:"));
if (adultos > 0 && Number.isInteger(adultos)) {
  const reserva = crearReserva(nombreCliente, adultos);
  const vanMenores = prompt("¿Van menores de edad? (si/no):");
  if (vanMenores !== null && vanMenores.toLowerCase().trim() === "si") {
    const menores = Number(prompt("¿Cuántos menores?:"));
    if (menores > 0 && Number.isInteger(menores)) reserva.menores = menores;
  }
  const rechazaSeguro = prompt("¿Rechaza el seguro? (si/no):");
  if (rechazaSeguro !== null && rechazaSeguro.toLowerCase().trim() === "si") delete reserva.seguro;
  mostrarReserva(reserva);
} else {
  console.log("La cantidad de adultos debe ser un entero mayor que cero.");
}