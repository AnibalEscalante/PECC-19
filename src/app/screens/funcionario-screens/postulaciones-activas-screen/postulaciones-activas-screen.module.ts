import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostulacionesActivasScreenRoutingModule } from './postulaciones-activas-screen-routing.module';
import { PostulacionesActivasScreenComponent } from './postulaciones-activas-screen.component';
import { PostulacionesActivasComponent } from '../../../components/users/funcionario/postulaciones-activas/postulaciones-activas.component';


@NgModule({
  declarations: [PostulacionesActivasScreenComponent, PostulacionesActivasComponent],
  imports: [
    CommonModule,
    PostulacionesActivasScreenRoutingModule
  ]
})
export class PostulacionesActivasScreenModule { }
