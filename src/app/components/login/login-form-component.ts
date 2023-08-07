import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { StorageService } from "src/app/services/data-storage.service";
import { HttpsService } from "src/app/services/servicios.service";

export interface IEmpleado {
  employeeID: string;
  name: string;
  supervisor: string;
  descr: string;
  status: string;
}

@Component({
  selector: 'login-form-component',
  templateUrl: './login-form-component.html',
  styleUrls: ['./login-form-component.css'],
})

export class LoginFormComponent implements OnInit {

  dataEmpleado: any = [];
  message: string = "standby"
  nombreBnv: string = ''

  loginForm = new UntypedFormGroup({
    loginFmr: new UntypedFormControl(''),
  });

  constructor(private storage: StorageService, public router: Router, private https: HttpsService) {
  }


  ngOnInit(): void {

  }

  submit() {
  }

  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();

  login() {
    console.log(this.loginForm.value.loginFmr)
    console.log(this.https.Login(this.loginForm.value.loginFmr))

    this.https.Login(this.loginForm.value.loginFmr)
      .subscribe((resp: any) => {
        console.log("AQUI" + resp);
        this.message = resp.mensaje;
        if (resp.mensaje == 'Access') {
          this.storage.noEmpleadoSet(this.loginForm.value.loginFmr);
          setTimeout(() => {
            this.router.navigateByUrl(`onePage`);
          }, 200);
        }
      },
        e => { // second parameter is to listen for error
          //  console.log(error);
          this.message = e.error;
        }
      );

    this.https.DataUser(this.loginForm.value.loginFmr).subscribe((resp:IEmpleado) => {
      this.dataEmpleado.push(resp);
      this.storage.empleadoBnvSet(resp.name)
      this.storage.departamentoSet(resp.descr)
      this.message = "ok";
    },
      e => {
        console.log(e.error);
        this.message = e.error;
      }
    );

  }
}
