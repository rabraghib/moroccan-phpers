import { Component, OnInit } from "@angular/core";
import { IPHPer } from "@app/core/modals";
import { COMMUNITY } from "@app/core/data";

@Component({
  selector: "app-leaderboard",
  templateUrl: "./leaderboard.component.html",
  styles: [],
})
export class LeaderboardComponent implements OnInit {
  users: IPHPer[] = COMMUNITY.PHPers;

  constructor() {}

  ngOnInit(): void {}
}
