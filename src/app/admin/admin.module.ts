import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './main/main.component';
import { ManageAboutComponent } from './manage-about/manage-about.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { ManageContactComponent } from './manage-contact/manage-contact.component';
import { ManageWalletComponent } from './manage-wallet/manage-wallet.component';
import { ReportComponent } from './report/report.component';
import { FainanceComponent } from './fainance/fainance.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from '../login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ManageCausesComponent } from './manage-causes/manage-causes.component';
import{HttpClientModule}from  '@angular/common/http';
import { CreatecauseComponent } from './createcause/createcause.component';
import { ManagetestimonialComponent } from './managetestimonial/managetestimonial.component'
import {MatDialogModule} from '@angular/material/dialog';
import { HeaderandfooterComponent } from './headerandfooter/headerandfooter.component';
import { ChaityallComponent } from './chaityall/chaityall.component';
import { DonationsreportComponent } from './donationsreport/donationsreport.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { ManageTestComponent } from './manage-test/manage-test.component';
import { DistributionOfFundsComponent } from './distribution-of-funds/distribution-of-funds.component';
import { BlockedUsersComponent } from './blocked-users/blocked-users.component';
import { LineChartComponent } from './line-chart/line-chart.component';


@NgModule({
  declarations: [
    MainComponent,
    ManageAboutComponent,
    ManageHomeComponent,
    ManageContactComponent,
    ManageWalletComponent,
    ReportComponent,
    FainanceComponent,
    ProfileComponent,
    LoginComponent,
    HeaderandfooterComponent,
    SidebarComponent,
    FooterComponent,
    ManageCausesComponent,
    CreatecauseComponent,
    ChaityallComponent,
    DonationsreportComponent,
    UsersComponent,
    ManageTestComponent,
    DistributionOfFundsComponent,
    BlockedUsersComponent,
    LineChartComponent
    



  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,MatDialogModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[HeaderandfooterComponent]
})
export class AdminModule {

}
