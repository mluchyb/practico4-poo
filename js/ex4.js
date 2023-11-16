/*
Gestión de proyectos en una empresa: 

Tienes dos arrays, uno para los nombres de proyectos y otro para los estados de los proyectos. Debes crear funciones que permitan agregar nuevos proyectos, cambiar el estado de un proyecto, asignar un responsable y generar un resumen de proyectos en curso.
*/

let nombresProyectos = ["Proyecto A", "Proyecto B", "Proyecto C"];
let estadosProyectos = ["En curso", "En curso", "En curso"];

function agregarProyecto(nombreProyecto) {
  nombresProyectos.push(nombreProyecto);
  estadosProyectos.push("En curso");
  console.log(`Nuevo proyecto "${nombreProyecto}" agregado.`);
}

function cambiarEstadoProyecto(indiceProyecto, nuevoEstado) {
  if (indiceProyecto >= 0 && indiceProyecto < estadosProyectos.length) {
    estadosProyectos[indiceProyecto] = nuevoEstado;
    console.log(`Estado del proyecto "${nombresProyectos[indiceProyecto]}" cambiado a "${nuevoEstado}".`);
  } else {
    console.log("Índice de proyecto inválido.");
  }
}

function asignarResponsable(indiceProyecto, responsable) {
  if (indiceProyecto >= 0 && indiceProyecto < nombresProyectos.length) {
    console.log(`Responsable "${responsable}" asignado al proyecto "${nombresProyectos[indiceProyecto]}".`);
  } else {
    console.log("Índice de proyecto inválido.");
  }
}

function resumenProyectosEnCurso() {
  console.log("Resumen de proyectos en curso:");
  for (let i = 0; i < nombresProyectos.length; i++) {
    if (estadosProyectos[i] === "En curso") {
      console.log(`Proyecto: ${nombresProyectos[i]}, Estado: ${estadosProyectos[i]}`);
    }
  }
}
