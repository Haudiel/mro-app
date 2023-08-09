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


export class OnePageComponent implements OnInit{

  constructor(private storage: StorageService, public router: Router, private https: HttpsService, private navigationService: NavigationService) {
  }

  objetosPorFolio: { [folio: string]: any[] } = {};

  nomEmpleadoBnv = this.storage.empleadoBnvGet()
  Active: String = ''

  ngOnInit(): void {
    // Establecer el estado de la navegación a true cuando se carga la segunda página.
    this.navigationService.setEnteredSecondPage(true);

    this.https.GetDataSolicitud().subscribe(data => {
      console.log(data)
      data.forEach((objeto:any) => {
        const folio = objeto.folio;

        // Si el folio no existe en el objeto de agrupación, lo creamos como un arreglo vacío
        if (!this.objetosPorFolio[folio]) {
          this.objetosPorFolio[folio] = [];
        }

        // Agregamos el objeto actual al arreglo correspondiente al folio
        this.objetosPorFolio[folio].push(objeto);
      });
    })

    console.log(this.objetosPorFolio)

  }




  submit() {
  }

  Home(){
    this.router.navigateByUrl('login')
  }

  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();
}
