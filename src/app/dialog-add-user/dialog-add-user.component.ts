import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  phoneNoPattern = /([+(\d]{1})(([\d+() -.]){5,16})([+(\d]{1})/gm;
  streetNoPattern = /^(0|[1-9][0-9]*)$/;
  emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  user: User = new User();

  addUserForm = new FormGroup({
    title: new FormControl(this.user.title),
    firstName: new FormControl(this.user.firstName, [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl(this.user.lastName, [Validators.required, Validators.minLength(2)]),
    birthDate: new FormControl(this.user.birthDate, [Validators.required]),
    street: new FormControl(this.user.street,Validators.required),
    streetNo: new FormControl(this.user.streetNo, [Validators.required, Validators.pattern(this.streetNoPattern)]),
    postcode: new FormControl(this.user.postcode,Validators.required),
    city: new FormControl(this.user.city,Validators.required),
    telephone:new FormControl(this.user.telephone, [Validators.required, Validators.pattern(this.phoneNoPattern)]),
    email: new FormControl(this.user.email,[Validators.required,Validators.email, Validators.pattern(this.emailPattern)])
  });

  

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>){}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(){
    if (this.addUserForm.valid) {
      console.log('submit form is ', this.addUserForm);
      console.log('submitting user', this.user);
    }
    
  }
}
