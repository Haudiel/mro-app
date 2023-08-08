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


  InsertMRO( critico: string, noParte: string, marca:string, desc: string, frecuencia:number, cantidad: number, linea:string, just:string) {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
    }
    var skipLot =
    {
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
    }

    console.log(skipLot);

    return this.http.post<any>('http://localhost:5016/api/Usuarios/InsertData', skipLot, httpOptions);
  }

  // InsertData( critico: string, noParte: string, marca:string, desc: string, frecuencia:number, cantidad: number, linea:string, just:string) {
  InsertData(DataRows: any[]) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
    }

    var skipLot =
    {
      "critico": "NO",
      "noParteFab": "sdsd",
      "marca": "sdsd",
      "descr": "sdsd",
      "frecuencia": 2,
      "cantidad": 3
    }

    var body = {
      "folio": "ssadasd",
      "numComprador": "asdsds",
      "nombreComprador": "asdsda",
      "nombreSolicitante": "asdasd",
      "critico": "asdsad",
      "noParteFab": "ddddd",
      "marca": "wwwww",
      "descr": "qqqq",
      "frecuencia": 5,
      "cantidad": 8,
      "lineaEstacionTrabajo": "sggg",
      "justificacion": "dddfff"
    };

    console.log(DataRows)
    return this.http.post('http://localhost:5016/api/Usuarios/InsertData', skipLot);
  }
}
