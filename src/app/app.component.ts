import { Component, ViewChild } from '@angular/core';
import { SidenavTogglerService } from './services/sidenav-toggler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('drawer') drawer: any;

  title = 'KonoCRM';

  constructor(public sidenavToggle: SidenavTogglerService){ }

  ngAfterViewInit(){
    this.sidenavToggle.getDrawer(this.drawer);
  }
}
