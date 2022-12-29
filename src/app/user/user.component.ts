import { Component } from '@angular/core';
import { collection, collectionData, doc, docData, Firestore, onSnapshot, setDoc, updateDoc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  users$: Observable<any>;
  users: any[] = [];

  constructor(public dialog: MatDialog, private firestore: Firestore) {
    let coll = collection(firestore, 'users');
    this.users$ = collectionData(coll);
    this.users$.subscribe((user) => {
      this.users = user;
    });
    this.tryfunction(coll);
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with result: ' + result);
    });
  }

  async tryfunction(coll) {
    await setDoc(doc(collection(this.firestore, 'testusers'),'Frank'), {
      name: 'Frank',
      favorites: {
        food: 'Pizza',
        color: 'blue'
      },
      age: 12
    });


    const userRef = doc(this.firestore, 'testusers', 'Frank');
    await updateDoc(userRef,{favorites:{'food':'Ice Cream'}});
  }
}
