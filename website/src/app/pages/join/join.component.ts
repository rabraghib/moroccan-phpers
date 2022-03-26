import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, Observable } from "rxjs";

@Component({
  selector: "app-join",
  templateUrl: "./join.component.html",
  styles: [],
})
export class JoinComponent implements OnInit {
  slugs$?: Observable<string[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.slugs$ = this.route.queryParams.pipe(
      map((data) => `${data["challenge"] ?? ""}`.split(","))
    );
  }
}
