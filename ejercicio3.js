//El programa arranca con este objeto:
//let producto = { nombre: "Morral", precio: 85000, stock: 12 };
//Leer un porcentaje de descuento. Una función debe retornar un objeto nuevo con el precio
//rebajado y una propiedad extra precioAnterior. Las demás propiedades se copian igual.
//Mostrar ambos objetos para demostrar que el original quedó intacto.

let producto = { nombre: "Morral", precio: 85000, stock: 12};
function aplicarDescuento(producto, porcentaje){
    const nuevoPrecio= producto.precio * (1-porcentaje/100);
    const oferta={
        nombre: producto.nombre,
        precio: Math.round(nuevoPrecio),
        precioAnterior: producto.precio,
        stock: producto.stock
    };
    return oferta;
}    

function mostrarProducto(producto){
let texto= producto.nombre + "-$" + producto.precio;
if("precioAnterior" in producto){
 texto += "(antes $"+ producto.precioAnterior + ")";
 console.log(texto);
}
 texto += "-" + producto.stock + "unidades";
 console.log(texto);
}
const porcentaje= Number(prompt("Porcentaje de descuento:"));
if (porcentaje >=0 && porcentaje <=100){
 const oferta= aplicardescuento(producto, porcentaje);
 console.log("Original:");
 mostrarProducto(producto);
 console.log("En oferta:");
 mostrarProducto(oferta);
}else{
    console.log("Porcentaje invalido");
  }


