import { Component, HostBinding, Input, OnInit } from "@angular/core";
import { ISocialLink } from "@app/core/modals";

@Component({
  selector: "app-social-links",
  templateUrl: "./social-links.component.html",
  styles: [],
})
export class SocialLinksComponent implements OnInit {
  @Input() links: ISocialLink[] = [];
  @HostBinding("class") hostClasses = "flex space-x-4";

  constructor() {}

  ngOnInit(): void {}
}
