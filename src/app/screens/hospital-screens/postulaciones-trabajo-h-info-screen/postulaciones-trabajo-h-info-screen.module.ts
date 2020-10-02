import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostulacionesTrabajoHInfoScreenRoutingModule } from './postulaciones-trabajo-h-info-screen-routing.module';
import { PostulacionesTrabajoHInfoScreenComponent } from './postulaciones-trabajo-h-info-screen.component';
import { PostulacionesTrabajoHInfoComponent } from '../../../components/users/hospital/postulaciones-trabajo-h-info/postulaciones-trabajo-h-info.component';


@NgModule({
  declarations: [PostulacionesTrabajoHInfoScreenComponent, PostulacionesTrabajoHInfoComponent],
  imports: [
    CommonModule,
    PostulacionesTrabajoHInfoScreenRoutingModule
  ]
})
export class PostulacionesTrabajoHInfoScreenModule { }
