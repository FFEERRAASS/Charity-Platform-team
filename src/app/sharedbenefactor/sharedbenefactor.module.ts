import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedbenefactorRoutingModule } from './sharedbenefactor-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedbenefactorRoutingModule
  ],
  exports:[
     NavbarComponent,
     FooterComponent]
})
export class SharedbenefactorModule { }
