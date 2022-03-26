import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-leaderboard",
  templateUrl: "./leaderboard.component.html",
  styles: [],
})
export class LeaderboardComponent implements OnInit {
  users = [
    ...[1, 2, 3, 4].map((i) => {
      return {
        name: "John Doe",
        avatar: `https://i.pravatar.cc/300?id=${i}`,
        bio: "John Doe is a cool guy",
        rank: 1,
        points: 100,
        links: {
          github: "https://github.com/rabraghib",
        },
      };
    }),
  ];

  constructor() {}

  ngOnInit(): void {}
}
