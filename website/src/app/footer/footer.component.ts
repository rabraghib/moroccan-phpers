import { Component, HostBinding, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styles: [],
})
export class FooterComponent implements OnInit {
  @Input("links") socialLinks: any;
  @HostBinding("class") HostClasses =
    "block p-4 bg-white sm:p-6 dark:bg-gray-800";

  constructor() {}

  ngOnInit(): void {}
}
