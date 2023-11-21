/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro {
    #ISBN;
    #titulo;
    #autor;
    #paginas;

    constructor(ISBN, titulo, autor, paginas) {
      this.#ISBN = ISBN;
      this.#titulo = titulo;
      this.#autor = autor;
      this.#paginas = paginas;
    }

    get ISBN() {
      return this.#ISBN;
    }
  
    set ISBN(ISBN) {
      this.#ISBN = ISBN;
    }

    get titulo() {
      return this.#titulo;
    }
  
    set titulo(titulo) {
      this.#titulo = titulo;
    }

    get autor() {
      return this.#autor;
    }
  
    set autor(autor) {
      this.#autor = autor;
    }
  
    get paginas() {
      return this.#paginas;
    }
  
    set paginas(paginas) {
      this.#paginas = paginas;
    }
  
    mostrarLibro() {
      console.log(`El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.paginas} páginas.`);
    }
  }
  
  const libro1 = new Libro("123456789", "Harry Potter", "J.K. Rowling", 400);
  const libro2 = new Libro("987654321", "Cien años de soledad", "Gabriel García Márquez", 350);
  
  libro1.mostrarLibro();
  libro2.mostrarLibro();
  
  if (libro1.paginas > libro2.paginas) {
    console.log(`${libro1.titulo} tiene más páginas que ${libro2.titulo}.`);
  } else if (libro1.paginas < libro2.paginas) {
    console.log(`${libro2.titulo} tiene más páginas que ${libro1.titulo}.`);
  } else {
    console.log("Ambos libros tienen la misma cantidad de páginas.");
  }
  