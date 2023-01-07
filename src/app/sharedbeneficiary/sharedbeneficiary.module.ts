import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedbeneficiaryRoutingModule } from './sharedbeneficiary-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedbeneficiaryRoutingModule
  ],
  exports:[ NavbarComponent,
    FooterComponent]
})
export class SharedbeneficiaryModule { }
