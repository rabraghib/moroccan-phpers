import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChallengeResolver } from "./core/resolvers/challenge.resolver";

import { AboutComponent } from "./pages/about/about.component";
import { ChallengeComponent } from "./pages/challenge/challenge.component";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "challenges/:slug",
    component: ChallengeComponent,
    resolve: {
      challenge: ChallengeResolver,
    },
  },
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
