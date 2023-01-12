import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
// Import library module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import{HttpClientModule, HTTP_INTERCEPTORS}from  '@angular/common/http'
import {MatDialogModule} from '@angular/material/dialog';
import { DatePipe } from '@angular/common'; 
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { TokenInterceptors } from 'src/Interceptor/token.interceptor';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReviewsComponent } from './reviews/reviews.component';
  @NgModule({
    declarations: [
      AppComponent,
      ContactComponent,
      AboutComponent,
      RegisterComponent,
      ReviewsComponent,



    ],
    imports: [
      BrowserModule,ToastrModule.forRoot(),ToastNoAnimationModule.forRoot(),
      AppRoutingModule,
      BrowserAnimationsModule,
      MatDialogModule,
      SharedModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      NgxSpinnerModule




    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports:[SharedModule],
    providers: [
      DatePipe,
      {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptors,
      multi:true
    }
  ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
