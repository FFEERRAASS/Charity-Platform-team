import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiaryRoutingModule } from './beneficiary-routing.module';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';
import { InformationComponent } from './information/information.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedbeneficiaryModule } from '../sharedbeneficiary/sharedbeneficiary.module';
import { CharityComponent } from './charity/charity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatError } from '@angular/material/form-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SidebacComponent } from './sidebac/sidebac.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgChartsModule } from 'ng2-charts';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ReviewsComponent } from './reviews/reviews.component';
import { MainComponent } from './main/main.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    ChatComponent,
    ProfileComponent,
    InformationComponent,
    AboutComponent,
    ContactComponent,
    CharityComponent,
    SidebacComponent,
    ReviewsComponent,
    MainComponent,
    TestimonialComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    BeneficiaryRoutingModule,
    MatInputModule,MatFormFieldModule

    ,FormsModule,ReactiveFormsModule,MatTableModule,MatSortModule,MatPaginatorModule,
    SharedbeneficiaryModule  ]
})
export class BeneficiaryModule { }
