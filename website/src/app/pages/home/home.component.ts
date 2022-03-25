import { Component, OnInit } from "@angular/core";
import { IModerator } from "@app/core/modals";
import { from, map, Observable } from "rxjs";
import { IChallengesMap, pressOuts } from "@ngaox/press";
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
  challenges$?: Observable<IChallengesMap>;
  moderators$?: Observable<IModerator[]> = from(
    import(`@app/core/data/moderators`).then((m) => m.default)
  );

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.challenges$ = this.http
      .get<IChallengesMap>(`/${pressOuts.dir}/${pressOuts.map}`)
      .pipe(map(sortChallenges));
  }
}
