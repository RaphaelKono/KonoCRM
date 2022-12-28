import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  userInfo = {
    title: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    street: '',
    streetNo: '',
    postcode: '',
    city: '',
    telephone: '',
    email: ''
  }

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>){}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
