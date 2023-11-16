/*
Catálogo de biblioteca: 
Tienes un array que almacena títulos de libros en una biblioteca. Debes crear funciones que permitan a los usuarios buscar libros por título, verificar si un libro específico está disponible para préstamo y llevar un registro de la disponibilidad de los libros.
*/


let catalogoLibros = ["Libro1", "Libro2", "Libro3", "Libro4", "Libro5"];

let disponibilidadLibros = [];
for (let i = 0; i < catalogoLibros.length; i++) {
  disponibilidadLibros.push(true);
}

function buscarLibro(titulo) {
  const indice = catalogoLibros.indexOf(titulo);
  if (indice !== -1) {
    console.log(`El libro "${titulo}" está en el catálogo.`);
  } else {
    console.log(`El libro "${titulo}" no está en el catálogo.`);
  }
}

function verificarDisponibilidad(titulo) {
  const indice = catalogoLibros.indexOf(titulo);
  if (indice !== -1) {
    if (disponibilidadLibros[indice]) {
      console.log(`El libro "${titulo}" está disponible para préstamo.`);
    } else {
      console.log(`El libro "${titulo}" no está disponible para préstamo.`);
    }
  } else {
    console.log(`El libro "${titulo}" no está en el catálogo.`);
  }
}

function prestarLibro(titulo) {
  const indice = catalogoLibros.indexOf(titulo);
  if (indice !== -1) {
    if (disponibilidadLibros[indice]) {
      disponibilidadLibros[indice] = false;
      console.log(`Se ha prestado el libro "${titulo}".`);
    } else {
      console.log(`El libro "${titulo}" no está disponible para préstamo.`);
    }
  } else {
    console.log(`El libro "${titulo}" no está en el catálogo.`);
  }
}

function devolverLibro(titulo) {
  const indice = catalogoLibros.indexOf(titulo);
  if (indice !== -1) {
    if (!disponibilidadLibros[indice]) {
      disponibilidadLibros[indice] = true;
      console.log(`Se ha devuelto el libro "${titulo}".`);
    } else {
      console.log(`El libro "${titulo}" no se puede devolver porque ya está disponible.`);
    }
  } else {
    console.log(`El libro "${titulo}" no está en el catálogo.`);
  }
}
