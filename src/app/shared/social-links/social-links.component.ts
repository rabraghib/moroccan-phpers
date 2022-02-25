import { Component, HostBinding, Input, OnInit } from "@angular/core";
import { ISocialLink } from "@app/core/modals";

@Component({
  selector: "app-social-links",
  templateUrl: "./social-links.component.html",
  styles: [],
})
export class SocialLinksComponent implements OnInit {
  @Input() links: ISocialLink[] = [];
  @HostBinding("class") hostClasses = "flex mt-4 space-x-4 sm:mt-0";

  constructor() {}

  ngOnInit(): void {}
}
