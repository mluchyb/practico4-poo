/*
Gestión de inventario en una tienda: 
Tienes dos arrays, uno que representa los productos en stock y otro que almacena los precios de los productos. Debes crear funciones que permitan agregar nuevos productos al inventario, eliminar productos agotados y calcular el valor total del inventario.
*/

let inventario = ["Camiseta", "Pantalón", "Zapatos"];
let precios = [15, 30, 50];

function agregarProducto(producto, precio) {
    inventario.push(producto);
    precios.push(precio);
}

function eliminarProducto(producto) {
    const index = inventario.indexOf(producto);
    if (index !== -1) {
        inventario.splice(index, 1);
        precios.splice(index, 1);
    }
}

function valorTotalInventario() {
    let total = 0;
    for (let i = 0; i < precios.length; i++) {
        total += precios[i];
    }
    return total;
}

agregarProducto("Bufanda", 20);

eliminarProducto("Pantalón");

let valorTotal = valorTotalInventario();
document.write("Inventario:", inventario);
document.write("Precios:", precios);
document.write("Valor total del inventario:", valorTotal);
