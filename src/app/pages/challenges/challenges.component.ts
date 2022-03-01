import { Component, OnInit } from "@angular/core";
import { COMMUNITY } from "@app/core/data";

@Component({
  selector: "app-challenges",
  templateUrl: "./challenges.component.html",
  styles: [],
})
export class ChallengesComponent implements OnInit {
  challenges = COMMUNITY.challenges;

  constructor() {}

  ngOnInit(): void {}
}
