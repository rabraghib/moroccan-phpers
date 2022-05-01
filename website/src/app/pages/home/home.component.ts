import { Component, OnInit } from "@angular/core";
import { IModerator } from "@app/core/modals";
import { from, map, Observable } from "rxjs";
import { IContest } from "@ngaox/press";
import { HttpClient } from "@angular/common/http";
import about from "@app/core/data/about";
import { sortChallenges } from "@app/core/data/helpers";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [``],
})
export class HomeComponent implements OnInit {
  about = about;
  challenges$?: Observable<IContest[]>;
  leaderboard$?: Observable<any[]>;
  moderators$?: Observable<IModerator[]> = from(
    import(`@app/core/data/moderators`).then((m) => m.default)
  );

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.challenges$ = this.http
      .get<IContest[]>(`/~content/~content.map.json`)
      .pipe(map(sortChallenges));
    this.leaderboard$ = this.http
      .get<any[]>("/~content/~leaderboard.map.json")
      .pipe(
        map((leaderboard) => {
          const entries = Object.entries(leaderboard);
          return entries
            .sort((a, b) => b[1] - a[1])
            .map(([name, points]) => ({ name, points }));
        })
      );
  }
}
