import { Component } from '@angular/core';
import { collection, doc, Firestore, setDoc } from '@angular/fire/firestore';
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
  addUserInProgress = false;

  addUserForm = new FormGroup({
    title: new FormControl(this.user.title),
    firstName: new FormControl(this.user.firstName, [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl(this.user.lastName, [Validators.required, Validators.minLength(2)]),
    birthDate: new FormControl(this.user.birthDate, [Validators.required]),
    street: new FormControl(this.user.street, Validators.required),
    streetNo: new FormControl(this.user.streetNo, [Validators.required, Validators.pattern(this.streetNoPattern)]),
    postcode: new FormControl(this.user.postcode, Validators.required),
    city: new FormControl(this.user.city, Validators.required),
    telephone: new FormControl(this.user.telephone, [Validators.required, Validators.pattern(this.phoneNoPattern)]),
    email: new FormControl(this.user.email, [Validators.required, Validators.email, Validators.pattern(this.emailPattern)])
  });


  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: Firestore) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async onSubmit() {
    this.addUserInProgress = true;
    if (this.addUserForm.valid) {
      this.addUserForm.disable();
      this.editUser();
      await this.saveUser();
      this.dialogRef.close();
      this.addUserForm.enable();
    }
    this.addUserInProgress = false;
  }

  editUser() {
    this.user.title = this.addUserForm.value.title;
    this.user.firstName = this.addUserForm.value.firstName;
    this.user.lastName = this.addUserForm.value.lastName;
    this.user.birthDate = this.addUserForm.value.birthDate;
    this.user.street = this.addUserForm.value.street;
    this.user.streetNo = this.addUserForm.value.streetNo;
    this.user.postcode = this.addUserForm.value.postcode;
    this.user.city = this.addUserForm.value.city;
    this.user.telephone = this.addUserForm.value.telephone;
    this.user.email = this.addUserForm.value.email;
    console.log('submit form is ', this.addUserForm);
    console.log('submitting user', this.user);
  }

  async saveUser() {
    let coll = collection(this.firestore, 'users');
    await setDoc(doc(coll), this.user.toJson());
  }
}
