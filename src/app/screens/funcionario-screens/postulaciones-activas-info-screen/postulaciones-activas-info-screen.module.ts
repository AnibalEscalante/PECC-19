import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostulacionesActivasInfoScreenRoutingModule } from './postulaciones-activas-info-screen-routing.module';
import { PostulacionesActivasInfoComponent } from '../../../components/users/funcionario/postulaciones-activas-info/postulaciones-activas-info.component';
import { PostulacionesActivasInfoScreenComponent } from './postulaciones-activas-info-screen.component';


@NgModule({
  declarations: [PostulacionesActivasInfoComponent, PostulacionesActivasInfoScreenComponent],
  imports: [
    CommonModule,
    PostulacionesActivasInfoScreenRoutingModule
  ]
})
export class PostulacionesActivasInfoScreenModule { }
