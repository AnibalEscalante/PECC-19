import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostulacionesTrabajoHRoutingModule } from './postulaciones-trabajo-h-routing.module';
import { PostulacionesTrabajoHComponent } from './postulaciones-trabajo-h.component';


@NgModule({
  declarations: [PostulacionesTrabajoHComponent],
  imports: [
    CommonModule,
    PostulacionesTrabajoHRoutingModule
  ]
})
export class PostulacionesTrabajoHModule { }
