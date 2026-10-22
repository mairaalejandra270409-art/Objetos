//El programa arranca con este glosario:
//let glosario = {
//api: "Conjunto de reglas para que dos programas se comuniquen.",
//servidor: "Programa que recibe peticiones y devuelve respuestas.",
//ruta: "Dirección a la que llega una petición, como /productos.",
//middleware: "Función que se ejecuta entre la petición y la respuesta.",
//endpoint: "Combinación de un método HTTP y una ruta."
//};El usuario escribe términos hasta "fin" y el programa muestra la definición, sin importar
//mayúsculas. Si el término no está, pregunta si quiere agregarlo y, si sí, pide la definición y lo
//agrega. Al final dice cuántos términos tiene el glosario.

const notas = { matematicas: 4.2, ingles: 3.1, programacion: 4.8, etica: 3.9 };

function contarClaves(objeto) {
  let cantidad = 0;
  for (const clave in objeto) cantidad++;
  return cantidad;
}

function calcularPromedioObjeto(objeto) {
  let suma = 0;
  for (const clave in objeto) suma += objeto[clave];
  const cantidad = contarClaves(objeto);
  return cantidad === 0 ? 0 : suma / cantidad;
}

function buscarClaveMayor(objeto) {
  let mejorClave = "";
  let mayorValor = -Infinity;
  for (const clave in objeto) {
    if (objeto[clave] > mayorValor) {
      mayorValor = objeto[clave];
      mejorClave = clave;
    }
  }
  return mejorClave;
}

function filtrarClavesMenores(objeto, limite) {
  const resultado = [];
  for (const clave in objeto) {
    if (objeto[clave] < limite) resultado.push(clave);
  }
  return resultado;
}

for (const materia in notas) console.log(materia + ": " + notas[materia]);
console.log("Promedio: " + calcularPromedioObjeto(notas).toFixed(1));
console.log("Mejor materia: " + buscarClaveMayor(notas));
console.log("Por reforzar: " + filtrarClavesMenores(notas, 3.5).join(", "));