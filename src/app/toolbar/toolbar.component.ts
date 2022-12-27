import { Component, ViewChild } from '@angular/core';
import { SidenavTogglerService } from '../services/sidenav-toggler.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @ViewChild('hamburger') hamburger: any;
  @ViewChild('drawer') drawer: any;
  
  constructor(public sidenavToggle: SidenavTogglerService){}

  toggleSidenav(){
    this.sidenavToggle.updateSidenav(this.hamburger, this.drawer);
  }
}
