import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubpageRoutingModule } from './subpage-routing.module';
import { SubpageComponent } from './subpage.component';


@NgModule({
  declarations: [SubpageComponent],
  imports: [
    CommonModule,
    SubpageRoutingModule
  ]
})
export class SubpageModule { }
