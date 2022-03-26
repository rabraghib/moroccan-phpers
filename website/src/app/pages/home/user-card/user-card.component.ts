import { Component, HostBinding, Input, OnInit } from "@angular/core";
import { IModerator } from "@app/core/modals";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styles: [],
})
export class UserCardComponent implements OnInit {
  @Input() user!: IModerator;
  @HostBinding("class") hostClasses =
    "flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row dark:border-gray-700 dark:bg-gray-800";

  constructor() {}

  ngOnInit(): void {}
}
