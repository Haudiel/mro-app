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

  nomEmpleadoBnv = this.storage.empleadoBnvGet()
  Active: String = ''

  ngOnInit(): void {
    // Establecer el estado de la navegación a true cuando se carga la segunda página.
    this.navigationService.setEnteredSecondPage(true);
  }

  submit() {
  }

  Home(){
    this.router.navigateByUrl('login')
  }

  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();
}
