import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesPromocionInfoRoutingModule } from './solicitudes-promocion-info-routing.module';
import { SolicitudesPromocionInfoComponent } from './solicitudes-promocion-info.component';


@NgModule({
  declarations: [SolicitudesPromocionInfoComponent],
  imports: [
    CommonModule,
    SolicitudesPromocionInfoRoutingModule
  ]
})
export class SolicitudesPromocionInfoModule { }
