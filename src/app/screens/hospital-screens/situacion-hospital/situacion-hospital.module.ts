import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SituacionHospitalRoutingModule } from './situacion-hospital-routing.module';
import { SituacionHospitalComponent } from './situacion-hospital.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SituacionHospitalComponent],
  imports: [
    CommonModule,
    SituacionHospitalRoutingModule,
    ReactiveFormsModule
  ]
})
export class SituacionHospitalModule { }
