import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'one-component',
  templateUrl: './two-component.html',
  styleUrls: ['./two-component.css'],
})

export class TwoPageComponent implements OnInit {

  mroForm = new UntypedFormGroup({
    mroFrm: new UntypedFormControl(''),
  });

  ngOnInit(): void {

  }

  onSubmit(){}
}
