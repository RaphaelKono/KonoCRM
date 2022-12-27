import { Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavTogglerService {

  drawer: any = '';
  
  constructor() { }

  getDrawer(drawer: any){
    console.log('Drawer looks like this: ',drawer);
    this.drawer = drawer;
  }

  updateSidenav(hamburger: any){
    let button = hamburger.nativeElement;
    const currentState = button.getAttribute("data-state");
    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
    console.log(this.drawer);
    this.drawer.toggle();
  }
}
