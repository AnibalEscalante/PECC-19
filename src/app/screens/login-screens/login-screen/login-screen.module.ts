import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginScreenRoutingModule } from './login-screen-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginScreenComponent } from './login-screen.component';



@NgModule({
  declarations: [LoginScreenComponent],
  imports: [
    CommonModule,
    LoginScreenRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginScreenModule { }
