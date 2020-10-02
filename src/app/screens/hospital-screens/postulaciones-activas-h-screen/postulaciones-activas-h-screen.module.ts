import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostulacionesActivasHScreenRoutingModule } from './postulaciones-activas-h-screen-routing.module';
import { PostulacionesActivasHScreenComponent } from './postulaciones-activas-h-screen.component';
import { PostulacionesActivasHComponent } from '../../../components/users/hospital/postulaciones-activas-h/postulaciones-activas-h.component';

@NgModule({
  declarations: [PostulacionesActivasHScreenComponent, PostulacionesActivasHComponent],
  imports: [
    CommonModule,
    PostulacionesActivasHScreenRoutingModule
  ]
})
export class PostulacionesActivasHScreenModule { }
