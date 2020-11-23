import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesPromocionHospInfoRoutingModule } from './solicitudes-promocion-hosp-info-routing.module';
import { SolicitudesPromocionHospInfoComponent } from './solicitudes-promocion-hosp-info.component';


@NgModule({
  declarations: [SolicitudesPromocionHospInfoComponent],
  imports: [
    CommonModule,
    SolicitudesPromocionHospInfoRoutingModule
  ]
})
export class SolicitudesPromocionHospInfoModule { }
