import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModertorRoutingModule } from './modertor-routing.module';
import { Main2Component } from './main2/main2.component';
import { MangeCharityComponent } from './mange-charity/mange-charity.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
 import { HeaderComponent } from './header/header.component';
import { ManageRequestComponent } from './manage-request/manage-request.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import {MatInputModule} from '@angular/material/input';
import { MatError } from '@angular/material/form-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { NgChartsModule } from 'ng2-charts';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    Main2Component,
    MangeCharityComponent,
    ProfileComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ManageRequestComponent

  ],
  imports: [
    CommonModule,
    ModertorRoutingModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,MatTableModule,
    NgChartsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [HeaderComponent,SidebarComponent,FooterComponent]
})
export class ModertorModule { }
