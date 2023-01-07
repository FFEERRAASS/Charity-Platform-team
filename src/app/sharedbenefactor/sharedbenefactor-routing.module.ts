import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenefactorModule } from '../benefactor/benefactor.module';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedbenefactorRoutingModule { }
