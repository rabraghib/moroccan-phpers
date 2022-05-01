import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  IContest,
  IUniqueContest,
  IChallenge,
  ISubmission,
} from "@ngaox/press";
import { map, Observable } from "rxjs";

@Component({
  selector: "app-challenge",
  templateUrl: "./challenge.component.html",
  styles: [],
})
export class ChallengeComponent implements OnInit {
  challenge$?: Observable<IContest>;
  edition$?: Observable<IChallenge>;
  editions$?: Observable<
    {
      slug: string;
      date: string;
    }[]
  >;
  editionSlug$?: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private _doc: Document
  ) {
    this.editionSlug$ = route.queryParams.pipe(map((data) => data["edition"]));
  }

  toSingle(ch: IContest) {
    return ch as IUniqueContest;
  }

  ensureNotEmpty(submissions?: ISubmission[]) {
    return submissions && submissions.length > 0 ? submissions : undefined;
  }

  ngOnInit(): void {
    const data$ = this.route.data.pipe(map((data) => data["challengeData"]));
    this.challenge$ = data$.pipe(map((data) => data.challenge));
    this.editions$ = this.challenge$.pipe(
      map((ch: any) =>
        Object.entries(ch?.editions ?? {})
          .map(([slug, date]) => ({
            slug,
            date: date as string,
          }))
          .sort((a, b) => {
            const aDate = new Date(a.date);
            const bDate = new Date(b.date);
            return aDate > bDate ? -1 : bDate > aDate ? 1 : 0;
          })
      )
    );
    this.edition$ = data$.pipe(
      map((data) => {
        return (data?.edition ?? data.challenge) as IChallenge;
      })
    );
  }
}
