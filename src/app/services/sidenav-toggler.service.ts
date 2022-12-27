import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavTogglerService {


  
  constructor() { }


  updateSidenav(hamburger: any, drawer: any){
    let button = hamburger.nativeElement;
    const currentState = button.getAttribute("data-state");
    console.log(currentState);
    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
    drawer.toggle();
  }
}
