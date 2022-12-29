import { Component } from '@angular/core';
import { collection, doc, docData, Firestore, onSnapshot } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(public dialog: MatDialog, private firestore: Firestore) {
    let coll = collection(this.firestore, 'users');
    let docRef = doc(coll);
    let users$ = docData(docRef);
    users$.subscribe((user) => console.log(user));
    //   const unsub = onSnapshot(doc(coll), (doc) => {
    //     console.log("Current data: ", doc.data());
    // });
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with result: ' + result);
    });
  }
}
