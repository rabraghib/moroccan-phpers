import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { IChallenge, pressOuts } from "@ngaox/press";
import { map, mergeMap, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ChallengeResolver implements Resolve<IChallenge> {
  constructor(private http: HttpClient) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IChallenge> {
    const fullSlug = `/${pressOuts.dir}/${route.params["slug"]}`;
    if (route.queryParamMap.has("edition")) {
      const edition = route.queryParamMap.get(`edition`);
      return this.http.get<IChallenge>(`${fullSlug}.json`).pipe(
        mergeMap((challenge: IChallenge) => {
          return this.http.get(`${fullSlug}/${edition}.json`).pipe(
            map((ed: any) => {
              return {
                ...challenge,
                body: ed.body,
              };
            })
          );
        })
      );
    } else {
      return this.http.get<IChallenge>(`${fullSlug}.json`);
    }
  }
}
