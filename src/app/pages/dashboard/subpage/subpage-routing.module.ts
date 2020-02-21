import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubpageComponent } from './subpage.component';

const routes: Routes = [{ path: '', component: SubpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubpageRoutingModule { }
