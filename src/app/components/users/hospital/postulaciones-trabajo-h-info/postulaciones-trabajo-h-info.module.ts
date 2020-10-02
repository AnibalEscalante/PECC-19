import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostulacionesTrabajoHInfoRoutingModule } from './postulaciones-trabajo-h-info-routing.module';
import { PostulacionesTrabajoHInfoComponent } from './postulaciones-trabajo-h-info.component';


@NgModule({
  declarations: [PostulacionesTrabajoHInfoComponent],
  imports: [
    CommonModule,
    PostulacionesTrabajoHInfoRoutingModule
  ]
})
export class PostulacionesTrabajoHInfoModule { }
