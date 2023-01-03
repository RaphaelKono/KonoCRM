import { Component } from '@angular/core';
import { collection, doc, docData, Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  user: User;
  userID: string = '';

  constructor(private route: ActivatedRoute, private firestore: Firestore, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.user = new User();
    this.route.params.subscribe((param: any) => this.subscribeCurrentRoute(param));
  }

  subscribeCurrentRoute(param: any) {
    this.userID = param.id;
    let coll = collection(this.firestore, 'users');
    let docRef = doc(coll, this.userID);
    let user$ = docData(docRef);
    user$.subscribe((user) => this.subscribeCurrentUserParams(user));
  }

  subscribeCurrentUserParams(user: any) {
    this.user.title = user.title;
    this.user.firstName = user.firstName;
    this.user.lastName = user.lastName;
    this.user.birthDate = user.birthDate;
    this.user.street = user.street;
    this.user.streetNo = user.streetNo;
    this.user.postcode = user.postcode;
    this.user.city = user.city;
    this.user.telephone = user.telephone;
    this.user.email = user.email;
  }


  editUser(): void {
    const dialogRef = this.dialog.open(DialogEditUserComponent, {
      data: {
        user: this.user,
        userID: this.userID
      }
    });
  }
}
