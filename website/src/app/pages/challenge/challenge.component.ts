import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IChallenge, ISingleChallenge } from "@ngaox/press";
import { map, Observable } from "rxjs";
import { omitKeys } from "@ngaox/devkit/src/utils/omit-keys";

@Component({
  selector: "app-challenge",
  templateUrl: "./challenge.component.html",
  styles: [],
})
export class ChallengeComponent implements OnInit {
  challenge$?: Observable<IChallenge>;
  body$?: Observable<string | undefined>;

  constructor(private route: ActivatedRoute) {}

  toSingle(ch: IChallenge) {
    return ch as ISingleChallenge;
  }

  ngOnInit(): void {
    this.challenge$ = this.route.data.pipe(
      map((data) => omitKeys(data["challenge"], ["body"]) as IChallenge)
    );
    this.body$ = this.route.data.pipe(map((data) => data["challenge"]?.body));
  }
}
