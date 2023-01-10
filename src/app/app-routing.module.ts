import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminModule } from './admin/admin.module';
import { AuthloginGuard } from './authlogin.guard';
import { BenefactorModule } from './benefactor/benefactor.module';
import { CausesComponent } from './benefactor/causes/causes.component';
import { ContactComponent } from './contact/contact.component';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { MangeCharityComponent } from './modertor/mange-charity/mange-charity.component';
import { ModertorModule } from './modertor/modertor.module';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path:'admin',
  loadChildren:()=>AdminModule,
  canActivate:[AuthloginGuard]
},
{
  path:'',
  loadChildren:()=>HomeModule
},
{
  path:'benefactor',
  loadChildren:()=>BenefactorModule
},
{
  path:'beneficiary',
loadChildren:()=>import('./beneficiary/beneficiary.module').then((m)=>m.BeneficiaryModule)
},{
  path:'about',
  component:AboutComponent
},{
  path:'contact',
  component:ContactComponent
},{
    path:'login',
    component:LoginComponent
},

{
  path:'Register',
  component:RegisterComponent
},
{
  path:'Moderator',
  loadChildren:()=>ModertorModule
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
