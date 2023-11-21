/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

*/

class Persona {
    constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.DNI = this.generaDNI();
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.anioNacimiento = anioNacimiento;
    }
  
    mostrarGeneracion() {
      if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
        console.log("Generación: Generación del Silencio");
        console.log("Rasgo característico: Austeridad.");
      } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
        console.log("Generación: Baby Boom");
        console.log("Rasgo característico: Ambición.");
      } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
        console.log("Generación: Generación X");
        console.log("Rasgo característico: Obsesión por el éxito.");
      } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
        console.log("Generación: Generación Y (Millennials)");
        console.log("Rasgo característico: Frustración.");
      } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
        console.log("Generación: Generación Z");
        console.log("Rasgo característico: Irreverencia.");
      } else {
        console.log("Generación: No clasificada");
        console.log("Rasgo característico: No definido para esta generación.");
      }
    }
  
    esMayorDeEdad() {
      return this.edad >= 18;
    }
  
    mostrarDatos() {
      console.log("Información de la Persona:");
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad} años`);
      console.log(`DNI: ${this.DNI}`);
      console.log(`Sexo: ${this.sexo}`);
      console.log(`Peso: ${this.peso} kg`);
      console.log(`Altura: ${this.altura} cm`);
      console.log(`Año de Nacimiento: ${this.anioNacimiento}`);
    }
  
    generaDNI() {
      return Math.floor(10000000 + Math.random() * 90000000);
    }

    }