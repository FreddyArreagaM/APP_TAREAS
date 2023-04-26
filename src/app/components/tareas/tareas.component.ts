import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  listTareas: Tarea[] = [];
  nombreTarea = '';

  constructor() { }
  
  ngOnInit() {
    
  }
  agregarTarea() {

    //Crear un objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    //Agregar el objeto tarea al array
    this.listTareas.push(tarea);

    //Resetear el form
    this.nombreTarea = '';
  }

  //Metodo eliminar tarea
  eliminarTarea(index: number): void {
    this.listTareas.splice(index, 1);
  }

  //Metodo Actualizar Tarea
  actualizarTarea(index: number,tarea: Tarea): void {
    this.listTareas[index].estado= !tarea.estado;
  }
  
}
