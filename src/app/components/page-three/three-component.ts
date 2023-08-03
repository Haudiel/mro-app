import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'one-component',
  templateUrl: './three-component.html',
  styleUrls: ['./three-component.css'],
})

export class ThreePageComponent implements OnInit {

  mroForm = new UntypedFormGroup({
    mroFrm: new UntypedFormControl(''),
  });

  ngOnInit(): void {

  }

  onSubmit(){}
}
