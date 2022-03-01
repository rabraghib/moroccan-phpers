import { Component, HostBinding, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-section",
  templateUrl: "./section.component.html",
  styles: [],
})
export class SectionComponent implements OnInit {
  @Input() title?: string;
  @Input() description?: string;

  @HostBinding("class")
  HostClasses = `block px-4 sm:px-6 py-12 md:py-20 mx-auto`;

  constructor() {}

  ngOnInit(): void {}
}
