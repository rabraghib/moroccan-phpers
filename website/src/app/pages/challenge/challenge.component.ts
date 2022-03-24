import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IChallenge, ISingleChallenge, IEdition } from "@ngaox/press";
import { map, Observable } from "rxjs";

@Component({
  selector: "app-challenge",
  templateUrl: "./challenge.component.html",
  styles: [],
})
export class ChallengeComponent implements OnInit {
  challenge$?: Observable<IChallenge>;
  edition$?: Observable<IEdition>;

  constructor(private route: ActivatedRoute) {}

  toSingle(ch: IChallenge) {
    return ch as ISingleChallenge;
  }

  ngOnInit(): void {
    const data$ = this.route.data.pipe(map((data) => data["challengeData"]));
    this.challenge$ = data$.pipe(map((data) => data.challenge));
    this.edition$ = data$.pipe(
      map((data) => {
        return (data?.edition ?? data.challenge) as IEdition;
      })
    );
  }
}
