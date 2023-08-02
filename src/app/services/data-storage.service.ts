import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  noEmpleadoSet( NoEmpleado:string){
    localStorage.setItem( 'empleado', NoEmpleado );
  }

  noEmpleadoGet(){
     return localStorage.getItem( 'empleado' );
  }

  empleadoBnvSet(nombEmpleado: string){
    localStorage.setItem('empleadoBnv', nombEmpleado)
  }

  empleadoBnvGet(){
    return localStorage.getItem('empleadoBnv')
  }

  clearObject(name:string){
    localStorage.removeItem(name);
  }
  clearAll(){
    localStorage.clear();
  }

}
