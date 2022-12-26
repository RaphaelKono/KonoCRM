import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'KonoCRM';

  @ViewChild('hamburger') hamburger: any;
  @ViewChild('drawer') drawer: any;
  

  // updateSidenav(){
  //   let button = this.hamburger.nativeElement;
  //   const currentState = button.getAttribute("data-state");
  //   console.log(currentState);
  //   if (!currentState || currentState === "closed") {
  //     button.setAttribute("data-state", "opened");
  //     button.setAttribute("aria-expanded", "true");
  //   } else {
  //     button.setAttribute("data-state", "closed");
  //     button.setAttribute("aria-expanded", "false");
  //   }
  //   this.drawer.toggle();
  // }
}
