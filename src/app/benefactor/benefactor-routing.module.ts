import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllcausesComponent } from './allcauses/allcauses.component';
import { CausesComponent } from './causes/causes.component';
import { ContactComponent } from './contact/contact.component';
import { DonationComponent } from './donation/donation.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {
    path:'profile',
    component:ProfileComponent
  }, 
  {
    path:'wallet',
    component:WalletComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
 
  {
    path:'causes',
    component:CausesComponent
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'donation',
    component:DonationComponent
  },
  {
    path:'allcauses',
    component:AllcausesComponent
  },
  {
    path:'testimonial',
    component:TestimonialComponent
  },
  {
    path:'reviews',
    component:ReviewsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BenefactorRoutingModule { }
