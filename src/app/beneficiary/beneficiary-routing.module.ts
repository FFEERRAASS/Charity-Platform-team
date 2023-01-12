import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharityComponent } from './charity/charity.component';
import { ContactComponent } from './contact/contact.component';
import { InformationComponent } from './information/information.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ProfileComponent } from './profile/profile.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'wallet',
    component:WalletComponent
  },
  {
    path:'information',
    component:InformationComponent
  },{
    path:"charity",
    component:CharityComponent
  },{
    path:"BeneficiaryProfile",
    component:ProfileUserComponent
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
export class BeneficiaryRoutingModule { }
