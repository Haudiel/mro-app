import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { StorageService } from "src/app/services/data-storage.service";
import { NavigationService } from "src/app/services/navigation.service";
import { HttpsService } from "src/app/services/servicios.service";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'one-component',
  templateUrl: './one-component.html',
  styleUrls: ['./one-component.css'],
})


export class OnePageComponent implements OnInit {

  constructor(private storage: StorageService, public router: Router, private https: HttpsService, private navigationService: NavigationService) {
  }

  agrupado: { [folio: string]: any[] } = {};

  nomEmpleadoBnv = this.storage.empleadoBnvGet()
  Active: String = ''

  folio: string
  nombre: string
  critico: string
  noParte: string
  marca: string
  descripcion: string
  frecuencia: string
  cantidad: string
  fecha: string
  linea:string

  ngOnInit(): void {
    // Establecer el estado de la navegación a true cuando se carga la segunda página.
    this.navigationService.setEnteredSecondPage(true);

    this.https.GetDataSolicitud().subscribe(data => {
      console.log(data)
      data.forEach((registro: any) => {
        if (!this.agrupado[registro.folio]) {
          this.agrupado[registro.folio] = [];
        }
        this.agrupado[registro.folio].push({
          nombre: registro.nombre,
          critico: registro.critico,
          noParte: registro.noParte,
          marca: registro.marca,
          descripcion: registro.descripcion,
          frecuencia: registro.frecuencia,
          cantidad: registro.cantidad,
          fecha: registro.fecha,
          linea_estacion: registro.linea
        });
      });

      for (this.folio in this.agrupado) {
        console.log(this.folio + ":");
        this.agrupado[this.folio].forEach((registro: any) => {
          console.log(JSON.stringify(registro, null, 2));
          this.nombre = registro.nombre;
          this.critico = registro.critico;
          this.noParte = registro.noParte;
          this.marca = registro.marca;
          this.descripcion = registro.descripcion;
          this.frecuencia = registro.frecuencia;
          this.cantidad = registro.cantidad;
          this.fecha = registro.fecha;
          this.linea = registro.linea_estacion;
        });
        console.log("-".repeat(40));
      }
    });


    // console.log(this.agrupado);

  }




  submit() {
  }

  Home() {
    this.router.navigateByUrl('login')
  }

  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();
}
