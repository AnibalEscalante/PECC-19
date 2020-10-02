import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostulacionesActivasHInfoRoutingModule } from './postulaciones-activas-h-info-routing.module';
import { PostulacionesActivasHInfoComponent } from './postulaciones-activas-h-info.component';


@NgModule({
  declarations: [PostulacionesActivasHInfoComponent],
  imports: [
    CommonModule,
    PostulacionesActivasHInfoRoutingModule
  ]
})
export class PostulacionesActivasHInfoModule { }
