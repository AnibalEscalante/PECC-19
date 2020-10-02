import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostulacionesTrabajoInfoScreenRoutingModule } from './postulaciones-trabajo-info-screen-routing.module';
import { PostulacionesTrabajoInfoScreenComponent } from './postulaciones-trabajo-info-screen.component';
import { PostulacionesTrabajoInfoComponent } from '../../../components/users/funcionario/postulaciones-trabajo-info/postulaciones-trabajo-info.component';


@NgModule({
  declarations: [PostulacionesTrabajoInfoScreenComponent, PostulacionesTrabajoInfoComponent],
  imports: [
    CommonModule,
    PostulacionesTrabajoInfoScreenRoutingModule
  ]
})
export class PostulacionesTrabajoInfoScreenModule { }
