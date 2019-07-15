import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerListComponent,
    LoginComponent,
    RegistrationComponent,
    CustomerDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      // { path:'welcome',component:WelcomeComponent,outlet:'secondary'},
      { path:'registration',component:RegistrationComponent},
      { path:'login',component:LoginComponent},
      { path:'customer',component:CustomerListComponent},
      // { path:'customerlist',component:CustomerListComponent}
      {path:'customer/:id/detail',component:CustomerDetailComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
