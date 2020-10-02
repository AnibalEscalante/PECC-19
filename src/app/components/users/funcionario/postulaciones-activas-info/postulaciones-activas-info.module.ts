import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostulacionesActivasInfoRoutingModule } from './postulaciones-activas-info-routing.module';
import { PostulacionesActivasInfoComponent } from './postulaciones-activas-info.component';


@NgModule({
  declarations: [PostulacionesActivasInfoComponent],
  imports: [
    CommonModule,
    PostulacionesActivasInfoRoutingModule
  ]
})
export class PostulacionesActivasInfoModule { }
