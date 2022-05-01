import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-leaderboard",
  templateUrl: "./leaderboard.component.html",
  styles: [],
})
export class LeaderboardComponent implements OnInit {
  @Input() leaderboard: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
