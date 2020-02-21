import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RoundPipe } from './pipes/round.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    RoundPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    RoundPipe
  ]
})
export class SharedModule { }
