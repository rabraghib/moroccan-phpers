import { Component, OnInit } from "@angular/core";
import { ThemeService } from "@app/core/services/theme.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styles: [``],
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

  get modeToggleIcon() {
    return this.themeService.$isDark.value
      ? "theme-toggle-dark-icon"
      : "theme-toggle-light-icon";
  }

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.init();
  }

  toggleTheme() {
    this.themeService.switchMode();
  }
}
