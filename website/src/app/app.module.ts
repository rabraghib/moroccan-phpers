import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IconsModule } from "@ngaox/icons";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { APP_ICONS } from "./core/icons";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { ButtonComponent } from "./shared/button/button.component";
import { FooterComponent } from "./footer/footer.component";
import { HrComponent } from "./shared/hr.component";
import { SectionComponent } from "./shared/section/section.component";
import { UserCardComponent } from "./shared/user-card/user-card.component";
import { SocialLinksComponent } from "./shared/social-links/social-links.component";
import { ChallengeCardComponent } from "./shared/challenge-card/challenge-card.component";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { AboutComponent } from "./pages/about/about.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { ChallengeComponent } from "./pages/challenge/challenge.component";
import { SocialLinksPipe } from "./core/pipes/social-links.pipe";
import { MetaItemComponent } from './shared/meta-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ButtonComponent,
    FooterComponent,
    HrComponent,
    SectionComponent,
    UserCardComponent,
    SocialLinksComponent,
    ChallengeCardComponent,
    LeaderboardComponent,
    AboutComponent,
    NotFoundComponent,
    ChallengeComponent,
    SocialLinksPipe,
    MetaItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IconsModule.forRoot(APP_ICONS),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
