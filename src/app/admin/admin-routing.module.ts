import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCharityComponent } from './all-charity/all-charity.component';
import { ChaityallComponent } from './chaityall/chaityall.component';
import { CreatecauseComponent } from './createcause/createcause.component';
import { DonationsreportComponent } from './donationsreport/donationsreport.component';
import { FainanceComponent } from './fainance/fainance.component';
import { MainComponent } from './main/main.component';
import { ManageAboutComponent } from './manage-about/manage-about.component';
import { ManageCausesComponent } from './manage-causes/manage-causes.component';
import { ManageContactComponent } from './manage-contact/manage-contact.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { ManageWalletComponent } from './manage-wallet/manage-wallet.component';
import { ManagetestimonialComponent } from './managetestimonial/managetestimonial.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{
  path:'main1',
  component:MainComponent
}
,{
  path:'profile',
  component:ProfileComponent
}
,{
  path:'allcharity',
  component:ChaityallComponent
}
,{
  path:'finanace',
  component:FainanceComponent
},
{
  path:'mabout',
  component:ManageAboutComponent
}
,{
  path:'mcontact',
  component:ManageContactComponent
}
,{
  path:'report',
  component:ReportComponent
}
,
{
  path:'mhome',
  component:ManageHomeComponent
},
{
  path:'mwallet',
  component:ManageWalletComponent
},
{
  path:'managecauses',
  component:ManageCausesComponent
},
{
  path:'createcause',
  component:CreatecauseComponent
},
{
  path:'managetestimonial',
  component:ManagetestimonialComponent
},{
  path:'donationReport',
  component:DonationsreportComponent
},
{
  path:'allusers',
  component:UsersComponent
}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
