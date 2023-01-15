import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenefactorRoutingModule } from './benefactor-routing.module';
import { WalletComponent } from './wallet/wallet.component';
import { ProfileComponent } from './profile/profile.component';
import { CausesComponent } from './causes/causes.component';
import { SharedbenefactorModule } from '../sharedbenefactor/sharedbenefactor.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DonationComponent } from './donation/donation.component';
import { AllcausesComponent } from './allcauses/allcauses.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ReviewsComponent } from './reviews/reviews.component';
// --------------------------------------

@NgModule({
    declarations: [
        WalletComponent,
        ProfileComponent,
        AboutComponent,
        ContactComponent,
        CausesComponent,
        MainComponent,
        DonationComponent,
        AllcausesComponent,
        TestimonialComponent,
        ReviewsComponent
        
   
        
    ],
    imports: [
        CommonModule,
        BenefactorRoutingModule,
        SharedbenefactorModule,
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        
        
    ]})
export class BenefactorModule { }
