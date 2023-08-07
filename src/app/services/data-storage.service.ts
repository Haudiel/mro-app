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

  departamentoSet(dept:string){
    localStorage.setItem('dept', dept)
  }

  departamentoGet(){
    return localStorage.getItem('dept')
  }

  folioSet(folio: string){
    localStorage.setItem('folio', folio)
  }

  folioGet(){
    return localStorage.getItem('folio')
  }

  clearObject(name:string){
    localStorage.removeItem(name);
  }
  clearAll(){
    localStorage.clear();
  }

}
