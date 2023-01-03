import { Component } from '@angular/core';
import { collection, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { UserFormService } from '../services/user-form.service';


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  
  user: User = new User();
  

  userForm: FormGroup;
  // userForm = new FormGroup({
  //   title: new FormControl(this.user.title),
  //   firstName: new FormControl(this.user.firstName, [Validators.required, Validators.minLength(2)]),
  //   lastName: new FormControl(this.user.lastName, [Validators.required, Validators.minLength(2)]),
  //   birthDate: new FormControl(new Date(this.user.birthDate.seconds), [Validators.required]),
  //   street: new FormControl(this.user.street, Validators.required),
  //   streetNo: new FormControl(this.user.streetNo, [Validators.required, Validators.pattern(this.streetNoPattern)]),
  //   postcode: new FormControl(this.user.postcode, Validators.required),
  //   city: new FormControl(this.user.city, Validators.required),
  //   telephone: new FormControl(this.user.telephone, [Validators.required, Validators.pattern(this.phoneNoPattern)]),
  //   email: new FormControl(this.user.email, [Validators.required, Validators.email, Validators.pattern(this.emailPattern)])
  // });

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: Firestore, public addUserHelper: UserFormService) {
    this.userForm = addUserHelper.createFormGroup(this.user);
   }

  // async onSubmit() {
  //   this.addUserInProgress = true;
  //   if (this.userForm.valid) {
  //     this.userForm.disable();
  //     this.editUser();
  //     await this.saveNewUser();
  //     this.dialogRef.close();
  //     this.userForm.enable();
  //   }
  //   this.addUserInProgress = false;
  // }

  // editUser() {
  //   this.user.title = this.userForm.value.title;
  //   this.user.firstName = this.userForm.value.firstName;
  //   this.user.lastName = this.userForm.value.lastName;
  //   this.user.birthDate = this.userForm.value.birthDate;
  //   this.user.street = this.userForm.value.street;
  //   this.user.streetNo = this.userForm.value.streetNo;
  //   this.user.postcode = this.userForm.value.postcode;
  //   this.user.city = this.userForm.value.city;
  //   this.user.telephone = this.userForm.value.telephone;
  //   this.user.email = this.userForm.value.email;
  // }

  // async saveNewUser() {
  //   let coll = collection(this.firestore, 'users');
  //   await setDoc(doc(coll), this.user.toJson());
  // }
}
