import { Component, HostBinding, Input, OnInit } from "@angular/core";
import {
  IChallenge,
  IPeriodicChallenge,
  ISingleChallenge,
} from "@app/core/modals";

@Component({
  selector: "app-challenge-card",
  templateUrl: "./challenge-card.component.html",
  styles: [],
})
export class ChallengeCardComponent implements OnInit {
  @Input() challenge!: IChallenge;
  @HostBinding("class")
  HostClasses = `bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`;

  constructor() {}

  ngOnInit(): void {}

  isSingleChallenge(ch: IChallenge): ISingleChallenge | false {
    if ("solutions" in ch) {
      return ch as ISingleChallenge;
    }
    return false;
  }
  isPeriodicChallenge(ch: IChallenge): IPeriodicChallenge | false {
    if ("solutions" in ch) {
      return false;
    }
    return ch as IPeriodicChallenge;
  }
}
