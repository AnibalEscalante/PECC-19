import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostulacionesActivasHInfoScreenRoutingModule } from './postulaciones-activas-h-info-screen-routing.module';
import { PostulacionesActivasHInfoScreenComponent } from './postulaciones-activas-h-info-screen.component';
import { PostulacionesActivasHInfoComponent } from '../../../components/users/hospital/postulaciones-activas-h-info/postulaciones-activas-h-info.component';



@NgModule({
  declarations: [PostulacionesActivasHInfoScreenComponent, PostulacionesActivasHInfoComponent],
  imports: [
    CommonModule,
    PostulacionesActivasHInfoScreenRoutingModule
  ]
})
export class PostulacionesActivasHInfoScreenModule { }
