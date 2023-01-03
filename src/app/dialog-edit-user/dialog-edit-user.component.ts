import { Component,Inject } from '@angular/core';
import { collection, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {

  phoneNoPattern = /([+(\d]{1})(([\d+() -.]){5,16})([+(\d]{1})/gm;
  streetNoPattern = /^(0|[1-9][0-9]*)$/;
  emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  userInProgress = false;
  user: User;

  userForm: FormGroup;

  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogEditUserComponent>, @Inject(MAT_DIALOG_DATA) public data: any){
    this.user = data.user;
    this.userForm = new FormGroup({
      title: new FormControl(this.user.title),
      firstName: new FormControl(this.user.firstName, [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl(this.user.lastName, [Validators.required, Validators.minLength(2)]),
      birthDate: new FormControl(new Date(this.user.birthDate.seconds), [Validators.required]),
      street: new FormControl(this.user.street, Validators.required),
      streetNo: new FormControl(this.user.streetNo, [Validators.required, Validators.pattern(this.streetNoPattern)]),
      postcode: new FormControl(this.user.postcode, Validators.required),
      city: new FormControl(this.user.city, Validators.required),
      telephone: new FormControl(this.user.telephone, [Validators.required, Validators.pattern(this.phoneNoPattern)]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email, Validators.pattern(this.emailPattern)])
    });
  }

  async onSubmit() {
    this.userInProgress = true;
    if (this.userForm.valid) {
      this.userForm.disable();
      this.editUser();
      await this.saveEditedUser();
      this.dialogRef.close();
      this.userForm.enable();
    }
    this.userInProgress = false;
  }

  editUser() {
    this.user.title = this.userForm.value.title;
    this.user.firstName = this.userForm.value.firstName;
    this.user.lastName = this.userForm.value.lastName;
    this.user.birthDate = this.userForm.value.birthDate;
    this.user.street = this.userForm.value.street;
    this.user.streetNo = this.userForm.value.streetNo;
    this.user.postcode = this.userForm.value.postcode;
    this.user.city = this.userForm.value.city;
    this.user.telephone = this.userForm.value.telephone;
    this.user.email = this.userForm.value.email;
  }

  async saveEditedUser() {
    let coll = collection(this.firestore, 'users');
    await setDoc(doc(coll, this.data.userID), this.user.toJson());
  }
}
