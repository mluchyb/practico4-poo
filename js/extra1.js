/*
Objeto "Cuenta Bancaria": Crea un objeto llamado cuentaBancaria con propiedades como saldo y titular, y métodos como depositar y retirar que actualicen el saldo.
*/

class CuentaBancaria {
    constructor(titular, saldoInicial = 0) {
      this.titular = titular;
      this.saldo = saldoInicial;
    }
  
    depositar(cantidad) {
      if (cantidad > 0) {
        this.saldo += cantidad;
        console.log(`Se depositaron ${cantidad} unidades. Saldo actual: ${this.saldo} unidades.`);
      } else {
        console.log("La cantidad a depositar debe ser mayor que cero.");
      }
    }
  
    retirar(cantidad) {
      if (cantidad > 0 && cantidad <= this.saldo) {
        this.saldo -= cantidad;
        console.log(`Se retiraron ${cantidad} unidades. Saldo actual: ${this.saldo} unidades.`);
      } else if (cantidad > this.saldo) {
        console.log("No hay suficiente saldo para realizar el retiro.");
      } else {
        console.log("La cantidad a retirar debe ser mayor que cero.");
      }
    }
  }
  