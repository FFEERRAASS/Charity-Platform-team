import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiaryModule } from '../beneficiary/beneficiary.module';

const routes: Routes = [{
  path:'beneficiary',
  loadChildren:()=>BeneficiaryModule
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedbeneficiaryRoutingModule { }
