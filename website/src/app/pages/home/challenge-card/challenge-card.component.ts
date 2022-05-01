import { Component, HostBinding, Input, OnInit } from "@angular/core";
import { IContest, IPeriodicContest, IUniqueContest } from "@ngaox/press";

@Component({
  selector: "app-challenge-card",
  templateUrl: "./challenge-card.component.html",
  styles: [],
})
export class ChallengeCardComponent implements OnInit {
  @Input() challenge!: IContest;
  @HostBinding("class")
  HostClasses = `bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`;

  constructor() {}

  ngOnInit(): void {}

  isSingleChallenge(ch: IContest): IUniqueContest | false {
    if ("date" in ch) {
      return ch as IUniqueContest;
    }
    return false;
  }
  isPeriodicChallenge(ch: IContest): IPeriodicContest | false {
    if ("date" in ch) {
      return false;
    }
    return ch as IPeriodicContest;
  }

  editionsNum(ch: IPeriodicContest) {
    return Object.keys(ch.editions ?? {}).length;
  }
}
