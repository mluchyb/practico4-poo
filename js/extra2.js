/*
Objeto "Lista de Tareas": Crea un objeto listaTareas con una propiedad tareas que sea un array de tareas, y métodos como agregarTarea, completarTarea y listarTareas que realicen acciones sobre la lista de tareas.
*/

const listaTareas = {
    tareas: [],
  
    agregarTarea: function (nuevaTarea) {
      this.tareas.push({
        tarea: nuevaTarea,
        completada: false
      });
    },
  
    completarTarea: function (indice) {
      if (indice >= 0 && indice < this.tareas.length) {
        this.tareas[indice].completada = true;
      } else {
        console.log("Índice de tarea no válido");
      }
    },
  
    listarTareas: function () {
      console.log("Lista de Tareas:");
      this.tareas.forEach((tarea, indice) => {
        const estado = tarea.completada ? "[X]" : "[ ]";
        console.log(`${indice + 1}. ${estado} ${tarea.tarea}`);
      });
    }
  };
  
  listaTareas.agregarTarea("Hacer la compra");
  listaTareas.agregarTarea("Estudiar para el examen");
  listaTareas.listarTareas();
  
  listaTareas.completarTarea(1);
  listaTareas.listarTareas();
  