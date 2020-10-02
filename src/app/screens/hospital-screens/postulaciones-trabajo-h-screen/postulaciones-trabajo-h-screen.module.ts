import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostulacionesTrabajoHScreenRoutingModule } from './postulaciones-trabajo-h-screen-routing.module';
import { PostulacionesTrabajoHScreenComponent } from './postulaciones-trabajo-h-screen.component';
import { PostulacionesTrabajoHComponent } from '../../../components/users/hospital/postulaciones-trabajo-h/postulaciones-trabajo-h.component';

@NgModule({
  declarations: [PostulacionesTrabajoHScreenComponent, PostulacionesTrabajoHComponent],
  imports: [
    CommonModule,
    PostulacionesTrabajoHScreenRoutingModule
  ]
})
export class PostulacionesTrabajoHScreenModule { }
