import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModertorRoutingModule } from './modertor-routing.module';
import { DocumentRequestComponent } from './document-request/document-request.component';
import { AcceptDonationsComponent } from './accept-donations/accept-donations.component';
import { MangeTestimonialComponent } from './mange-testimonial/mange-testimonial.component';
import { ManagetestimonialComponent } from '../admin/managetestimonial/managetestimonial.component';
import { MsgContactusComponent } from './msg-contactus/msg-contactus.component';
import { MsgRealchatComponent } from './msg-realchat/msg-realchat.component';
import { MangeUsersComponent } from './mange-users/mange-users.component';
import { ProfileComponent } from './profile/profile.component';
import { Main2Component } from './main2/main2.component';


@NgModule({
  declarations: [
    DocumentRequestComponent,
    AcceptDonationsComponent,
    MangeTestimonialComponent,
    MsgContactusComponent,
    MsgRealchatComponent,
    MangeUsersComponent,
    ProfileComponent,
    Main2Component
  ],
  imports: [
    CommonModule,
    ModertorRoutingModule
  ]
})
export class ModertorModule { }
