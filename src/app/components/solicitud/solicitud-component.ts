import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { StorageService } from 'src/app/services/data-storage.service';
import { HttpsService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './solicitud-component.html',
  styleUrls: ['./solicitud-component.css']
})
export class SolicitudComponent implements OnInit {

  userTable!: FormGroup;
  control!: FormArray;
  mode!: boolean;
  touchedRows: any;
  constructor(private fb: FormBuilder, private storage: StorageService, private https: HttpsService) { }

  nomEmpleadoBnv = this.storage.empleadoBnvGet()
  dept = this.storage.departamentoGet()
  folio = this.crearFolio()

  ngOnInit(): void {
    this.touchedRows = [];
    this.userTable = this.fb.group({
      tableRows: this.fb.array([])
    });
    this.addRow();
  }

  obtenerHoraHermosillo() {
    // Obtener la hora actual en Hermosillo (UTC-7 o UTC-6 dependiendo del horario)
    const now = new Date();
    const hermosilloOffset = now.getTimezoneOffset() === 420 ? -7 : -6;
    const hermosilloTime = new Date(now.getTime() + hermosilloOffset * 60 * 60 * 1000);
    return hermosilloTime;
  }

  crearFolio() {
    const now = this.obtenerHoraHermosillo();
    const folio = now.toISOString().replace(/[-:T.]/g, '').slice(0, -1); // Eliminar el último dígito (milisegundos)
    this.storage.folioSet(folio)
    return folio;
  }

  ngAfterOnInit() {
    this.control = this.userTable.get('tableRows') as FormArray;
  }

  initiateForm(): FormGroup {
    return this.fb.group({
      critico: ['', Validators.required],
      noParte: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      frecuenciaCambio: ['', [Validators.required, Validators.maxLength(10)]],
      cantidadInstaladas: ['', [Validators.required]],
      isEditable: [true]
    });
  }

  addRow() {
    const control = this.userTable.get('tableRows') as FormArray;
    control.push(this.initiateForm());
  }

  deleteRow(index: number) {
    const control = this.userTable.get('tableRows') as FormArray;
    control.removeAt(index);
  }

  editRow(group: FormGroup) {
    group.get('isEditable')?.setValue(true);
  }

  doneRow(group: FormGroup) {
    group.get('isEditable')?.setValue(false);
  }

  saveUserDetails() {
    console.log(this.userTable.value);
  }

  get getFormControls() {
    const control = this.userTable.get('tableRows') as FormArray;
    return control;
  }

  submitForm() {
    const control = this.userTable.get('tableRows') as FormArray;
    this.touchedRows = control.controls.filter(row => row.touched).map(row => row.value);

    for(const {
      critico,
      noParte,
      marca,
      descripcion,
      frecuenciaCambio,
      cantidad,
    } of this.touchedRows){
      this.https.InsertData(critico,noParte,marca,descripcion,frecuenciaCambio,cantidad, "ASP", "JUST")
      console.log(critico)
      console.log(noParte)
      console.log(marca)
      console.log(descripcion)
      console.log(frecuenciaCambio)
      console.log(cantidad)
    }

    console.log(this.touchedRows);
  }

  toggleTheme() {
    this.mode = !this.mode;
  }
}
