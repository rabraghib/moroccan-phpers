import { Component, HostBinding, OnInit } from "@angular/core";
import { COMMUNITY } from "src/app/core/data";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [``],
})
export class HomeComponent implements OnInit {
  challenges = COMMUNITY.challenges.slice(0, 2);
  moderators = COMMUNITY.moderators;

  constructor() {}

  ngOnInit(): void {}
}
