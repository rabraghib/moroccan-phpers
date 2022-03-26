import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { ChallengeComponent } from "./challenge.component";
import { ChallengeResolver } from "@app/core/resolvers/challenge.resolver";
import { MetaItemComponent } from "./mete-item/meta-item.component";
import { IconsModule } from "@ngaox/icons";
import { SharedModule } from "@app/shared/shared.module";

const routes: Routes = [
  {
    path: ":slug",
    component: ChallengeComponent,
    runGuardsAndResolvers: "paramsOrQueryParamsChange",
    resolve: {
      challengeData: ChallengeResolver,
    },
  },
];

@NgModule({
  declarations: [ChallengeComponent, MetaItemComponent],
  imports: [
    CommonModule,
    IconsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class ChallengeModule {}
