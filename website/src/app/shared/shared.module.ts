import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HrComponent } from "./hr.component";
import { ButtonComponent } from "./button/button.component";
import { SocialLinksComponent } from "./social-links/social-links.component";
import { SocialLinksPipe } from "@app/core/pipes/social-links.pipe";
import { IconsModule } from "@ngaox/icons";

const EXPORTS = [HrComponent, ButtonComponent, SocialLinksComponent];

@NgModule({
  declarations: [...EXPORTS, SocialLinksPipe],
  imports: [CommonModule, IconsModule],
  exports: [...EXPORTS],
})
export class SharedModule {}
