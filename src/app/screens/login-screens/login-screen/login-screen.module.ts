import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginScreenRoutingModule } from './login-screen-routing.module';


@NgModule({
  declarations: [LoginScreenModule],
  imports: [
    CommonModule,
    LoginScreenRoutingModule
  ]
})
export class LoginScreenModule { }
