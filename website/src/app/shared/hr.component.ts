import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-hr",
  template: `
    <hr
      [class]="
        isVertical
          ? 'absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2'
          : 'my-6 container mx-auto border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8'
      "
    />
  `,
  styles: [],
})
export class HrComponent implements OnInit {
  @Input() isVertical: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
