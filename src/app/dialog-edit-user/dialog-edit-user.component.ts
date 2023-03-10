import { Component, Inject } from '@angular/core';
import { collection, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserFormService } from '../services/user-form.service';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {

  userForm: FormGroup;
  // userForm = new FormGroup({
  //   title: new FormControl(this.data.user.title),
  //   firstName: new FormControl(this.data.user.firstName, [Validators.required, Validators.minLength(2)]),
  //   lastName: new FormControl(this.data.user.lastName, [Validators.required, Validators.minLength(2)]),
  //   birthDate: new FormControl(new Date(this.data.user.birthDate.seconds), [Validators.required]),
  //   street: new FormControl(this.data.user.street, Validators.required),
  //   streetNo: new FormControl(this.data.user.streetNo, [Validators.required, Validators.pattern(this.streetNoPattern)]),
  //   postcode: new FormControl(this.data.user.postcode, Validators.required),
  //   city: new FormControl(this.data.user.city, Validators.required),
  //   telephone: new FormControl(this.data.user.telephone, [Validators.required, Validators.pattern(this.phoneNoPattern)]),
  //   email: new FormControl(this.data.user.email, [Validators.required, Validators.email, Validators.pattern(this.emailPattern)])
  // });
  

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public editUserHelper: UserFormService) {
    this.userForm = editUserHelper.createFormGroup(this.data.user);
  }


// editUser() {
//   this.data.user.title = this.userForm.value.title;
//   this.data.user.firstName = this.userForm.value.firstName;
//   this.data.user.lastName = this.userForm.value.lastName;
//   this.data.user.birthDate = this.userForm.value.birthDate;
//   this.data.user.street = this.userForm.value.street;
//   this.data.user.streetNo = this.userForm.value.streetNo;
//   this.data.user.postcode = this.userForm.value.postcode;
//   this.data.user.city = this.userForm.value.city;
//   this.data.user.telephone = this.userForm.value.telephone;
//   this.data.user.email = this.userForm.value.email;
// }

//   async saveEditedUser() {
//   let coll = collection(this.firestore, 'users');
//   await setDoc(doc(coll, this.data.userID), this.data.user.toJson());
// }
}
