/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
perimetro: suma de los lados
area: alto por ancho
*/

class Rectangulos {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
        this.perimetro = (alto + ancho) * 2;
        this.area = alto * ancho
    }
}

const primerRectangulo = new Rectangulos(10, 15)

console.log(primerRectangulo);