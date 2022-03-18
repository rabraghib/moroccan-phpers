import { Component, HostBinding, OnInit } from "@angular/core";
import { COMMUNITY } from "../core/data";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styles: [],
})
export class FooterComponent implements OnInit {
  socialLinks = COMMUNITY.links;
  @HostBinding("class") HostClasses =
    "block p-4 bg-white sm:p-6 dark:bg-gray-800";

  constructor() {}

  ngOnInit(): void {}
}
