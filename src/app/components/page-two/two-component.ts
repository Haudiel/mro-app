import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ColumnMode } from '@swimlane/ngx-datatable';


interface EditingStatus {
  [key: string]: boolean;
}

interface RowObject {
  [key: string]: string | number; // Assuming the properties can be strings or numbers
}

@Component({
  selector: 'one-component',
  templateUrl: './two-component.html',
  styleUrls: ['./two-component.css'],

})

export class TwoPageComponent implements OnInit {

  editing: EditingStatus = {};
  rows: RowObject[] = [];

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch((data: never[]) => {
      this.rows = data;
    });
  }

  fetch(cb: { (data: never[]): void; (arg0: any): void; }) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateValue(event: any, cell: string, rowIndex: number) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }

  mroForm = new UntypedFormGroup({
    mroFrm: new UntypedFormControl(''),
  });

  ngOnInit(): void {

  }

  onSubmit() { }
}
