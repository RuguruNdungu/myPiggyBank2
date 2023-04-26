import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { LandingComponent } from './landing/landing.component';
import { SplashComponent } from './splash/splash.component';
import { LayoutComponentComponent } from './layout-component/layout-component.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { sendmoneyComponent } from './sendmoney/sendmoney.component';
import { AppRoutingModule } from './app-routing.module';
import { RequestComponent } from './request/request.component';
import { LipaComponent } from './lipa/lipa.component';
import { AirtimeComponent } from './airtime/airtime.component';
import { MyPhoneComponent } from './my-phone/my-phone.component';
import { OtherphoneComponent } from './otherphone/otherphone.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    // LandingComponent,
    SplashComponent,
    LayoutComponentComponent,
   AboutComponent,
   ContactComponent,
   RequestComponent,
   LipaComponent,
   AirtimeComponent,
   MyPhoneComponent,
   OtherphoneComponent,
   RegisterComponent,
   LoginComponent,
   sendmoneyComponent, 
   DashboardComponent
  ],
  imports: [
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    
    CommonModule,
    
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
