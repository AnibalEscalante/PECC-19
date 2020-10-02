import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostulacionesTrabajoInfoRoutingModule } from './postulaciones-trabajo-info-routing.module';
import { PostulacionesTrabajoInfoComponent } from './postulaciones-trabajo-info.component';


@NgModule({
  declarations: [
    PostulacionesTrabajoInfoComponent
  ],
  imports: [
    CommonModule,
    PostulacionesTrabajoInfoRoutingModule
  ]
})
export class PostulacionesTrabajoInfoModule { }
