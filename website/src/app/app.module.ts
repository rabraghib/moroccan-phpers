import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IconsModule, INgaoxIcon } from "@ngaox/icons";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { APP_ICONS } from "./core/icons";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { SectionComponent } from "./pages/home/section/section.component";
import { UserCardComponent } from "./pages/home/user-card/user-card.component";
import { ChallengeCardComponent } from "./pages/home/challenge-card/challenge-card.component";
import { LeaderboardComponent } from "./pages/home/leaderboard/leaderboard.component";
import { AboutComponent } from "./pages/about/about.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { SharedModule } from "./shared/shared.module";
import { HashPipe } from './core/pipes/hash.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SectionComponent,
    UserCardComponent,
    ChallengeCardComponent,
    LeaderboardComponent,
    AboutComponent,
    NotFoundComponent,
    HashPipe,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IconsModule.forRoot(APP_ICONS),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
