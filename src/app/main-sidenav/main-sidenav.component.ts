import { Component } from '@angular/core';
import { SidenavTogglerService } from '../services/sidenav-toggler.service';

@Component({
  selector: 'app-main-sidenav',
  templateUrl: './main-sidenav.component.html',
  styleUrls: ['./main-sidenav.component.scss']
})
export class MainSidenavComponent {

  constructor(public sidenavToggle: SidenavTogglerService){}

  
}
