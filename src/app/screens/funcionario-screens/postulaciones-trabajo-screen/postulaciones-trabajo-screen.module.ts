import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostulacionesTrabajoScreenRoutingModule } from './postulaciones-trabajo-screen-routing.module';
import { PostulacionesTrabajoScreenComponent } from './postulaciones-trabajo-screen.component';
import { PostulacionesTrabajoComponent } from 'src/app/components/users/funcionario/postulaciones-trabajo/postulaciones-trabajo.component';


@NgModule({
  declarations: [PostulacionesTrabajoScreenComponent, PostulacionesTrabajoComponent],
  imports: [
    CommonModule,
    PostulacionesTrabajoScreenRoutingModule
  ]
})
export class PostulacionesTrabajoScreenModule { }
