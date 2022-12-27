import { Component, ViewChild } from '@angular/core';
import { SidenavTogglerService } from './services/sidenav-toggler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'KonoCRM';

  @ViewChild('drawer') drawer: any;
  

  constructor(public sidenavToggle: SidenavTogglerService){ }

  ngAfterViewInit(){
    this.sidenavToggle.getDrawer(this.drawer);
  }
}
