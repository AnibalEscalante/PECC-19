import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostulacionesActivasHRoutingModule } from './postulaciones-activas-h-routing.module';
import { PostulacionesActivasHComponent } from './postulaciones-activas-h.component';


@NgModule({
  declarations: [PostulacionesActivasHComponent],
  imports: [
    CommonModule,
    PostulacionesActivasHRoutingModule
  ]
})
export class PostulacionesActivasHModule { }
