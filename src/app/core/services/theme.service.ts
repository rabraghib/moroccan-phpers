import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  $isDark: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(@Inject(DOCUMENT) private document: Document) {}

  isDarkMode(): Observable<boolean> {
    return this.$isDark.asObservable();
  }

  init() {
    const doesPreferDark =
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    this.switchMode(doesPreferDark ? "dark" : "light");
  }

  switchMode(mode?: "dark" | "light") {
    let isDarkMode = !this.$isDark.value;
    if (mode) {
      isDarkMode = mode === "dark";
    }
    this.$isDark.next(isDarkMode);
    if (isDarkMode) {
      this.document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      this.document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  }
}
