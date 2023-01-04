import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavTogglerService } from './services/sidenav-toggler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('drawer') drawer: any;

  title = 'KonoCRM';

  constructor(public sidenavToggle: SidenavTogglerService, public router: Router){ }

  ngAfterViewInit(){
    this.sidenavToggle.getDrawer(this.drawer);
  }
}
