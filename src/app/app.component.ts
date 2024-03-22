import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: ` <app-header></app-header>
    <router-outlet></router-outlet>
    <p>radi</p>`,
  styles: [],
})
export class AppComponent {
  title = "prodavnica";
}
