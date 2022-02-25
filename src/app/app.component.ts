import { Component, HostBinding } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent {
  @HostBinding("class") hostClasses =
    "block min-h-screen bg-white dark:bg-gray-800";
}
