import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";

import { ChallengesComponent } from "./pages/challenges/challenges.component";
import { HomeComponent } from "./pages/home/home.component";
import { LeaderboardComponent } from "./pages/leaderboard/leaderboard.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { ViewChallengeComponent } from "./pages/view-challenge/view-challenge.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  { path: "challenges", component: ChallengesComponent },
  { path: "challenges/:slug", component: ViewChallengeComponent },
  { path: "leaderboard", component: LeaderboardComponent },
  { path: "about", component: AboutComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
