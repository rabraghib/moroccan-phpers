import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./pages/about/about.component";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  { path: "about", component: AboutComponent },
  {
    path: "join",
    loadChildren: () =>
      import("./pages/join/join.module").then((m) => m.JoinModule),
  },
  {
    path: "challenges",
    loadChildren: () =>
      import("./pages/challenge/challenge.module").then(
        (m) => m.ChallengeModule
      ),
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
