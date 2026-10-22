//Leer una frase, pasarla a minúsculas y separarla en palabras con split(" "). Contar cuántas
//veces aparece cada palabra usando un objeto. Mostrar cada palabra con su conteo en el orden
//en que apareció por primera vez, cuántas palabras distintas hay y cuál es la más repetida. Si
//hay empate, gana la que apareció primero.

const glosario = {
  api: "Conjunto de reglas para que dos programas se comuniquen.",
  servidor: "Programa que recibe peticiones y devuelve respuestas.",
  ruta: "Dirección a la que llega una petición, como /productos.",
  middleware: "Función que se ejecuta entre la petición y la respuesta.",
  endpoint: "Combinación de un método HTTP y una ruta."
};

function buscarDefinicion(glosario, termino) {
  const clave = termino.toLowerCase().trim();
  return glosario[clave];
}

function contarClaves(objeto) {
  let cantidad = 0;
  for (const clave in objeto) cantidad++;
  return cantidad;
}

let termino = "";
while (termino !== "fin") {
  termino = prompt("Término (o fin para terminar):");
  if (termino === null) break;
  termino = termino.toLowerCase().trim();
  if (termino === "fin") break;

  const definicion = buscarDefinicion(glosario, termino);
  if (definicion !== undefined) {
    console.log(termino + ": " + definicion);
  } else {
    console.log('"' + termino + '" no está en el glosario');
    const agregar = prompt("¿Quieres agregarlo? (si/no):");
    if (agregar !== null && agregar.toLowerCase().trim() === "si") {
      const nuevaDefinicion = prompt("Definición:");
      if (nuevaDefinicion !== null && nuevaDefinicion.trim() !== "") {
        glosario[termino] = nuevaDefinicion.trim();
        console.log("Agregado");
      }
    }
  }
}
console.log("El glosario tiene " + contarClaves(glosario) + " términos");
