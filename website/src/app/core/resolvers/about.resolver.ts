import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { IAbout } from "../modals";

@Injectable({
  providedIn: "root",
})
export class AboutResolver implements Resolve<IAbout> {
  constructor(private http: HttpClient) {}
  resolve(): Observable<IAbout> {
    return this.http.get<IAbout>("/assets/about.json");
  }
}
