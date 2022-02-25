import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styles: [``],
})
export class ButtonComponent implements OnInit {
  @Input() variant: "primary" | "secondary" = "primary";
  readonly variantsClasses = {
    primary: "text-white bg-blue-600 hover:bg-blue-700",
    secondary: "text-white bg-gray-900 hover:bg-gray-800",
  };

  constructor() {}

  ngOnInit(): void {}
}
