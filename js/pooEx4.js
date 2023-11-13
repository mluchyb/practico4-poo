/*
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

/*
class Rectangulo {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
        this.perimetro = (alto + ancho) * 2;
        this.area = alto * ancho
    }
}

const primerRectangulo = new Rectangulo(10, 15)

console.log(primerRectangulo);
*/

class Productos {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
}