import { Component, Input } from "@angular/core";

@Component({
  selector: "app-meta-item",
  template: `
    <li
      class="flex items-center py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white"
    >
      <ngaox-icon
        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400"
        [name]="icon"
      ></ngaox-icon>
      <span class="flex-1 ml-3 whitespace-nowrap">
        <ng-content></ng-content>
      </span>
    </li>
  `,
  styles: [],
})
export class MetaItemComponent {
  @Input() icon: string = "";
}
