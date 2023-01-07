import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        
        
    ]
})
export class HomeModule { }
