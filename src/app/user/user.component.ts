import { Component } from '@angular/core';
import { collection, collectionData, doc, Firestore, getDoc, getDocs, onSnapshot, onSnapshotsInSync, query } from '@angular/fire/firestore';
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
    let coll = collection(this.firestore, 'users');
    this.users$ = collectionData(coll,{idField:'id'});
    this.users$.subscribe((user) => {
      this.users = user;
      console.log(this.users);
    });
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent);
    dialogRef.afterClosed().subscribe(result => console.log('The dialog closed with result: ' + result));
  }

 

}
