import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { JoinComponent } from "./join.component";
import { SharedModule } from "@app/shared/shared.module";

const routes: Routes = [{ path: "", component: JoinComponent }];

@NgModule({
  declarations: [JoinComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class JoinModule {}
