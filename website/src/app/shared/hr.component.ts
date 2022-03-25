import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "app-hr",
  template: `
    <hr
      [class]="
        isVertical
          ? 'absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2'
          : 'container mx-auto border-gray-200 sm:mx-auto dark:border-gray-700'
      "
    />
  `,
  styles: [],
})
export class HrComponent {
  @Input() isVertical: boolean = false;

  @HostBinding("class") get className() {
    return this.isVertical ? "" : "block my-6 lg:my-8";
  }
}
