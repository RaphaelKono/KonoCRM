import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

  @ViewChild('hamburger') hamburger: any;
  @ViewChild('drawer') drawer: any;


  updateBtn(){
    let button = this.hamburger.nativeElement;
    const currentState = button.getAttribute("data-state");
    console.log(currentState);
    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
    this.drawer.toggle();
  }
}
