import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavTogglerService } from '../services/sidenav-toggler.service';

@Component({
  selector: 'app-main-sidenav',
  templateUrl: './main-sidenav.component.html',
  styleUrls: ['./main-sidenav.component.scss']
})
export class MainSidenavComponent implements OnInit {

  @ViewChild('drawer') drawer: any;

  constructor(public sidenavToggle: SidenavTogglerService){
    
  }

  ngOnInit(): void {
    console.log(this.drawer);
    this.sidenavToggle.getDrawer(this.drawer);
  }


}
