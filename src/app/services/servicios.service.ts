import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  constructor(private http: HttpClient) { }

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
}
