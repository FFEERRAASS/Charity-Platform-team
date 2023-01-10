import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageRequestComponent } from './manage-request/manage-request.component';
import { MangeCharityComponent } from './mange-charity/mange-charity.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'ManageCharity',
    component:MangeCharityComponent
  },
  {
    path:'ManageRequest',
    component:ManageRequestComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModertorRoutingModule { }
