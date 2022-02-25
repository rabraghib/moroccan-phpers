import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-section",
  templateUrl: "./section.component.html",
  styles: [],
})
export class SectionComponent implements OnInit {
  @Input() title?: string;
  @Input() description?: string;

  constructor() {}

  ngOnInit(): void {}
}
