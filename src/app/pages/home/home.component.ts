import { Component, HostBinding, OnInit } from "@angular/core";
import { COMMUNITY } from "src/app/core/data";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [``],
})
export class HomeComponent implements OnInit {
  challenges = COMMUNITY.challenges;
  moderators = COMMUNITY.moderators;
  description = COMMUNITY.description;

  constructor() {}

  ngOnInit(): void {}
}
