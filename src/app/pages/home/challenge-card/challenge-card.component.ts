import { Component, Input, OnInit } from "@angular/core";
import { IChallenge } from "@app/core/modals";

@Component({
  selector: "app-challenge-card",
  templateUrl: "./challenge-card.component.html",
  styles: [],
})
export class ChallengeCardComponent implements OnInit {
  @Input() challenge!: IChallenge;

  constructor() {}

  ngOnInit(): void {}
}
