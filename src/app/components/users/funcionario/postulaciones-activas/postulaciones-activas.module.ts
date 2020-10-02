import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostulacionesActivasRoutingModule } from './postulaciones-activas-routing.module';
import { PostulacionesActivasComponent } from './postulaciones-activas.component';


@NgModule({
  declarations: [PostulacionesActivasComponent],
  imports: [
    CommonModule,
    PostulacionesActivasRoutingModule
  ]
})
export class PostulacionesActivasModule { }
