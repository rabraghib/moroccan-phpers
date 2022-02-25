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
import { SocialLinksComponent } from './shared/social-links/social-links.component';
import { ChallengeCardComponent } from './pages/home/challenge-card/challenge-card.component';

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
