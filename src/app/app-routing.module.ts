import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AirtimeComponent } from './airtime/airtime.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponentComponent } from './layout-component/layout-component.component';
import { LipaComponent } from './lipa/lipa.component';
import { LoginComponent } from './login/login.component';
import { MyPhoneComponent } from './my-phone/my-phone.component';
import { OtherphoneComponent } from './otherphone/otherphone.component';
import { RequestComponent } from './request/request.component';
import { sendmoneyComponent } from './sendmoney/sendmoney.component';
import { RegisterComponent } from './register/register/register.component';
import { ForgotpasswordComponent } from './forgotpasword/forgotpassword/forgotpassword.component';


const routes: Routes = [

  {
    path: '', component: LayoutComponentComponent
  },

  {
    path:'contact', component: ContactComponent
  },
  {
    path:'about', component: AboutComponent
  },
  
  {
    path: 'sendmoney', component: sendmoneyComponent
  },
  
  {
    path: 'register', component: RegisterComponent

  },
  {
    path: 'forgotpasword', component: ForgotpasswordComponent

  },
  {
   path: 'login', component: LoginComponent
  },
  {
    path:'request', component:RequestComponent
  },
  {
    path:'lipa', component:LipaComponent
  },
  {
    path:'airtime',component:AirtimeComponent

  },
  {
  path:'myphone' ,component:MyPhoneComponent
  },
  {
path:'otherphone',component:OtherphoneComponent
  },
  {
 path:'dashboard',component:DashboardComponent
  },
  // {
  //   path: '**', component: LayoutComponentComponent
  // },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
