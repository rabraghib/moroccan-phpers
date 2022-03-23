import { Component, HostBinding } from "@angular/core";
import { ILinks } from "./core/modals";
import about from "@app/core/data/about";

@Component({
  selector: "app-root",
  template: `
    <app-navbar></app-navbar>
    <div class="block mx-auto container px-4 sm:px-6">
      <router-outlet></router-outlet>
    </div>
    <app-footer [links]="links"></app-footer>
  `,
  styles: [],
})
export class AppComponent {
  links: ILinks = about.links;

  @HostBinding("class") hostClasses =
    "block min-h-screen bg-white dark:bg-gray-800";
}
