/*
Registro de notas de estudiantes: 
Tienes dos arrays, uno con nombres de estudiantes y otro con sus respectivas notas en un curso. Debes crear funciones que calculen el promedio de notas por estudiante y muestren un resumen con los nombres de los estudiantes que aprobaron y reprobaron el curso.
*/

let estudiantes = ["Ana", "Juan", "María", "Pedro", "Lucía"];
let notas = [
    [7, 8, 6, 9, 5],  
    [6, 4, 5, 7, 6],  
    [8, 9, 7, 7, 8],  
    [5, 6, 4, 6, 5],  
    [6, 8, 7, 8, 7],   
];

function calcularPromedioPorEstudiante(estudiante) {
    let indice = estudiantes.indexOf(estudiante);
    if (indice !== -1) {
        let totalNotas = notas[indice].reduce((acc, nota) => acc + nota, 0);
        return totalNotas / notas[indice].length;
    }
    return -1; //  si el estudiante no se encuentra

    function calcularPromedio(notasEstudiante) {
        let suma = 0;
        for (let i = 0; i < notasEstudiante.length; i++) {
            suma += notasEstudiante[i];
        }
        return suma / notasEstudiante.length;
    }
}

function resumenNotas() {
    let aprobados = [];
    let reprobados = [];

    for (let i = 0; i < estudiantes.length; i++) {
        let promedio = calcularPromedioPorEstudiante(estudiantes[i]);
        if (promedio >= 6) {
            aprobados.push(estudiantes[i]);
        } else {
            reprobados.push(estudiantes[i]);
        }
    }

    document.write("Estudiantes aprobados:", aprobados);
    document.write("Estudiantes reprobados:", reprobados);
}

document.write("Promedio de María:", calcularPromedioPorEstudiante("María"));
resumenNotas();

function obtenerPromedios() {
    let promedios = [];

    for (let i = 0; i < estudiantes.length; i++) {
        let promedio = calcularPromedio(notas[i]);
        promedios.push({ nombre: estudiantes[i], promedio: promedio });
    }

    return promedios;
}

function generarResumen() {
    let resumen = obtenerPromedios();
    let aprobados = [];
    let reprobados = [];

    resumen.forEach(estudiante => {
        if (estudiante.promedio >= 6) {
            aprobados.push(estudiante.nombre);
        } else {
            reprobados.push(estudiante.nombre);
        }
    });

    document.write("Estudiantes aprobados:", aprobados);
    document.write("Estudiantes reprobados:", reprobados);
}

generarResumen();