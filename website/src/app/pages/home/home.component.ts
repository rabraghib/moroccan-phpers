import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IAbout, IModerator } from "@app/core/modals";
import { map, Observable } from "rxjs";
import { IChallengesMap, pressOuts } from "@ngaox/press";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [``],
})
export class HomeComponent implements OnInit {
  about$?: Observable<IAbout>;
  challenges$?: Observable<IChallengesMap>;
  moderators$?: Observable<IModerator[]>;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.about$ = this.route.data.pipe(map((data) => data["about"]));
  }

  ngOnInit(): void {
    this.challenges$ = this.http.get<IChallengesMap>(
      `/${pressOuts.dir}/${pressOuts.map}`
    );
    this.moderators$ = this.http.get<IModerator[]>(`/assets/moderators.json`);
  }
}
