import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavTogglerService {

  drawer: any = '';

  constructor() { }

  getDrawer(drawer: any) {
    this.drawer = drawer;
  }

  updateSidenav(hamburger: any) {
    let button = hamburger.nativeElement;
    const currentState = button.getAttribute("data-state");
    this.changeBtnSetting(currentState, button)
    this.drawer.toggle();
  }

  changeBtnSetting(currentState: any, button: any) {
    if (!currentState || currentState === "closed")
      this.openBtnSetting(button)
    else
      this.closeBtnSetting(button)
  }

  openBtnSetting(button: any) {
    button.setAttribute("data-state", "opened");
    button.setAttribute("aria-expanded", "true");
  }

  closeBtnSetting(button: any) {
    button.setAttribute("data-state", "closed");
    button.setAttribute("aria-expanded", "false");
  }
}
