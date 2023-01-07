import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule
  ],
  exports:[NavbarComponent,MatDialogModule,FooterComponent]
})
export class SharedModule { }
