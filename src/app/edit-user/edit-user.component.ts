import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import moment from 'moment/src/moment';

import {LocalstorageService} from '../services/localstorage.service';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class EditUserComponent implements OnInit {
  today: Date = moment();
  editUserForm: FormGroup;
  // name = new FormControl('', [Validators.required]);
  // email = new FormControl('', [Validators.required]);
  // // dateOfBirth = new FormControl({value: this.today}, [Validators.required]);
  // dateOfBirth = new FormControl(this.today);

  getErrorMessage(name) {
    switch(name) {
      case 'name':
      return this.editUserForm.controls.name.hasError('required') ? 'You must enter a value' :
      this.editUserForm.controls.name.hasError('name') ? 'Not a valid name' :
      '';
      case 'email':
      return this.editUserForm.controls.email.hasError('required') ? 'You must enter a value' :
      this.editUserForm.controls.email.hasError('email') ? 'Not a valid email' :
          '';
      // case 'dateOfBirth':
      // return   this.editUserForm.controls.dateOfBirth.hasError('required') ? 'You must enter a value' : ''; 
    }
  }

  constructor(private localstorageService: LocalstorageService) { }

  ngOnInit() {
    this.createForm();
  }

  save() {
    console.log(this.editUserForm.value);
    this.localstorageService.
    updateUser(this.editUserForm.value.name, this.editUserForm.value.email, this.editUserForm.value.dateOfBirth.toDate(), '38 Deoro Parade, Clyde North, VIC 3978').subscribe((data)=>{
      console.log('saved', data);
    });
  }

  private createForm() {
    this.editUserForm = new FormGroup({
      // tslint:disable-next-line
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl(this.today)
    });
  }

}
