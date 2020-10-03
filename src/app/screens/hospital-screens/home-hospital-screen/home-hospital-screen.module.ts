import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeHospitalScreenRoutingModule } from './home-hospital-screen-routing.module';
import { HomeHospitalScreenComponent } from './home-hospital-screen.component';



@NgModule({
  declarations: [HomeHospitalScreenComponent],
  imports: [
    CommonModule,
    HomeHospitalScreenRoutingModule
  ]
})
export class HomeHospitalScreenModule { }
