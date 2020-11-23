import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesPromocionHospScreenRoutingModule } from './solicitudes-promocion-hosp-screen-routing.module';
import { SolicitudesPromocionHospScreenComponent } from './solicitudes-promocion-hosp-screen.component';
import { SolicitudesPromocionHospComponent } from '../../../components/users/colegio-medico/solicitudes-promocion-hosp/solicitudes-promocion-hosp.component';


@NgModule({
  declarations: [SolicitudesPromocionHospScreenComponent, SolicitudesPromocionHospComponent],
  imports: [
    CommonModule,
    SolicitudesPromocionHospScreenRoutingModule
  ]
})
export class SolicitudesPromocionHospScreenModule { }
