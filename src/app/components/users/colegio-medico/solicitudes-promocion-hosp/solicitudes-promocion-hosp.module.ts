import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesPromocionHospRoutingModule } from './solicitudes-promocion-hosp-routing.module';
import { SolicitudesPromocionHospComponent } from './solicitudes-promocion-hosp.component';


@NgModule({
  declarations: [SolicitudesPromocionHospComponent],
  imports: [
    CommonModule,
    SolicitudesPromocionHospRoutingModule
  ]
})
export class SolicitudesPromocionHospModule { }
