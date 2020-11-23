import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesPromocionHospInfoScreenRoutingModule } from './solicitudes-promocion-hosp-info-screen-routing.module';
import { SolicitudesPromocionHospInfoScreenComponent } from './solicitudes-promocion-hosp-info-screen.component';
import { SolicitudesPromocionHospInfoComponent } from '../../../components/users/colegio-medico/solicitudes-promocion-hosp-info/solicitudes-promocion-hosp-info.component';


@NgModule({
  declarations: [SolicitudesPromocionHospInfoScreenComponent, SolicitudesPromocionHospInfoComponent],
  imports: [
    CommonModule,
    SolicitudesPromocionHospInfoScreenRoutingModule
  ]
})
export class SolicitudesPromocionHospInfoScreenModule { }
