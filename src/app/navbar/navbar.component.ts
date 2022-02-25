import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  isMenuOpened = false;
  links = [
    {
      name: "Challenges",
      url: "/challenges",
    },
    {
      name: "Leaderboard",
      url: "/leaderboard",
    },
    {
      name: "About",
      url: "/about",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
