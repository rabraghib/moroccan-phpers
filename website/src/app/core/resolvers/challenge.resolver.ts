import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
} from "@angular/router";
import { IChallenge, IEdition, pressOuts } from "@ngaox/press";
import { map, mergeMap, Observable, of } from "rxjs";
import { getLatestEditionSlug } from "../data/helpers";

interface IChallengeData {
  challenge: IChallenge;
  edition?: IEdition;
}

@Injectable({
  providedIn: "root",
})
export class ChallengeResolver implements Resolve<IChallengeData> {
  constructor(private http: HttpClient, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IChallengeData> {
    const fullSlug = `/${pressOuts.dir}/${route.params["slug"]}`;
    const edition = route.queryParamMap.get(`edition`);
    return this.http.get<IChallenge>(`${fullSlug}.json`).pipe(
      mergeMap((challenge: IChallenge) => {
        if ("editions" in challenge) {
          if (edition && edition in (challenge?.editions ?? {})) {
            return this.http.get(`${fullSlug}/${edition}.json`).pipe(
              map((edition: any) => {
                return {
                  challenge,
                  edition,
                };
              })
            );
          } else {
            const latestEdition = getLatestEditionSlug(challenge);
            this.router.navigate(["/challenges", route.params["slug"]], {
              queryParams: {
                edition: latestEdition,
              },
            });
          }
        }
        return of({
          challenge,
        });
      })
    );
  }
}