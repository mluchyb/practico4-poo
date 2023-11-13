/*
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:

objeto.encender();  auto encendido
objeto.apadar()     l auto se apagó

*/

let auto = {
    color: '',
    marca: '',
    modelo: '',
    encender: function (){
        document.write(`<p>El auto está encendido.</p>`)
    },
    apagar: function (){
        document.write(`<p>El auto se apagó.</p>`)
    },
} 