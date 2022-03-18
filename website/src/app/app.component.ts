import { Component, HostBinding } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-navbar></app-navbar>
    <div class="block mx-auto container px-4 sm:px-6">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent {
  @HostBinding("class") hostClasses =
    "block min-h-screen bg-white dark:bg-gray-800";
}
