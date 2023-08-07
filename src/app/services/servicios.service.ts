import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './data-storage.service';

export interface IEmpleado {
  employeeID: string;
  name: string;
  supervisor: string;
  descr: string;
  status: string;
}


@Injectable({
  providedIn: 'root'
})

export class HttpsService {
  constructor(private http: HttpClient, private storage: StorageService) { }

  // url = 'http://172.19.130.25/ApiSkipLot/api/';
  url = 'http://localhost:5016/api/';

  Login(NoEmpleado: string) {
    console.log(NoEmpleado)
    // return this.http.get<any>(this.url + `Usuarios/Access?emplid=${NoEmpleado}`);

    return this.http.get<any>(this.url + `Usuarios/Access?emplid=${NoEmpleado}`);
  }

  DataUser(NoEmpleado: string) {
    return this.http.get<IEmpleado>(this.url + `Usuarios/GetData?emplid=${NoEmpleado}`);
  }

  InsertData( critico: string, noParte: string, marca:string, desc: string, frecuencia:number, cantidad: number, linea:string, just:string) {
    console.log("INSERT DATA")
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
    }
    var body = {
      "folio": this.storage.folioGet(),
      "numComprador": this.storage.noEmpleadoGet(),
      "nombreComprador": this.storage.empleadoBnvGet(),
      "nombreSolicitante": this.storage.empleadoBnvGet(),
      "critico": critico,
      "noParteFab": noParte,
      "marca": marca,
      "descr": desc,
      "frecuencia": frecuencia,
      "cantidad": cantidad,
      "lineaEstacionTrabajo": linea,
      "justificacion": just
    };
    return this.http.post<any>(this.url + `Usuarios/InsertData`,  body, httpOptions);
  }
}
