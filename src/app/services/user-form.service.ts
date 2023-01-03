import { Injectable } from '@angular/core';
import { collection, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/models/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {

  phoneNoPattern = /([+(\d]{1})(([\d+() -.]){5,16})([+(\d]{1})/gm;
  streetNoPattern = /^(0|[1-9][0-9]*)$/;
  emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  userInProgress = false;

  constructor(private firestore: Firestore) { }

  createFormGroup(value) {
    return new FormGroup({
      title: new FormControl(value.title),
      firstName: new FormControl(value.firstName, [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl(value.lastName, [Validators.required, Validators.minLength(2)]),
      birthDate: new FormControl(new Date(value.birthDate.seconds), [Validators.required]),
      street: new FormControl(value.street, Validators.required),
      streetNo: new FormControl(value.streetNo, [Validators.required, Validators.pattern(this.streetNoPattern)]),
      postcode: new FormControl(value.postcode, Validators.required),
      city: new FormControl(value.city, Validators.required),
      telephone: new FormControl(value.telephone, [Validators.required, Validators.pattern(this.phoneNoPattern)]),
      email: new FormControl(value.email, [Validators.required, Validators.email, Validators.pattern(this.emailPattern)])
    });
  }

  async onSubmit(userForm, data, dialogRef, userIsNew) {
    this.userInProgress = true;
    if (userForm.valid)
      await this.setUser(userForm, data, dialogRef, userIsNew);
    this.userInProgress = false;
  }

  async setUser(userForm, data, dialogRef, userIsNew) {
    userForm.disable();
    if (userIsNew) {
      this.editUser(data, userForm.value);
      await this.saveNewUser(data);
    }
    else {
      this.editUser(data.user, userForm.value);
      await this.saveEditedUser(data);
    }
    dialogRef.close();
    userForm.enable();
  }

  editUser(user: any, userFormValues) {
    user.title = userFormValues.title;
    user.firstName = userFormValues.firstName;
    user.lastName = userFormValues.lastName;
    user.birthDate = userFormValues.birthDate;
    user.street = userFormValues.street;
    user.streetNo = userFormValues.streetNo;
    user.postcode = userFormValues.postcode;
    user.city = userFormValues.city;
    user.telephone = userFormValues.telephone;
    user.email = userFormValues.email;
  }

  async saveEditedUser(data) {
    let coll = collection(this.firestore, 'users');
    await setDoc(doc(coll, data.userID), data.user.toJson());
  }

  async saveNewUser(user) {
    let coll = collection(this.firestore, 'users');
    await setDoc(doc(coll), user.toJson());
  }
}
