/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

*/

const cuenta = {
    titular: "Alex",
    saldo: 0,
  
    ingresar: function (cantidad) {
      if (cantidad > 0) {
        this.saldo += cantidad;
        console.log(`Se han ingresado ${cantidad}. Saldo actual: ${this.saldo}.`);
      } else {
        console.log("La cantidad ingresada debe ser mayor que 0.");
      }
    },
  
    extraer: function (cantidad) {
      if (cantidad > 0 && cantidad <= this.saldo) {
        this.saldo -= cantidad;
        console.log(`Se han extraído ${cantidad}. Saldo actual: ${this.saldo}.`);
      } else {
        console.log("Cantidad no válida o saldo insuficiente.");
      }
    },
  
    informar: function () {
      console.log(`Titular: ${this.titular}, Saldo actual: ${this.saldo}.`);
    }
  };
