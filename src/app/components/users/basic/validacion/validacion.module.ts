import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidacionRoutingModule } from './validacion-routing.module';
import { ValidacionComponent } from './validacion.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ValidacionComponent],
  imports: [
    CommonModule,
    ValidacionRoutingModule,
    ReactiveFormsModule
  ]
})
export class ValidacionModule { }
