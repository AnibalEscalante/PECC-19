import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginScreenRoutingModule } from './login-screen-routing.module';
import { LoginScreenComponent } from './login-screen.component';


@NgModule({
  declarations: [LoginScreenComponent],
  imports: [
    CommonModule,
    LoginScreenRoutingModule
  ]
})
export class LoginScreenModule { }
