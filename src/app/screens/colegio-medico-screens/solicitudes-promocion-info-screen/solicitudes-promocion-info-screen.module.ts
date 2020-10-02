import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesPromocionInfoScreenRoutingModule } from './solicitudes-promocion-info-screen-routing.module';
import { SolicitudesPromocionInfoScreenComponent } from './solicitudes-promocion-info-screen.component';
import { SolicitudesPromocionInfoComponent } from '../../../components/users/colegio-medico/solicitudes-promocion-info/solicitudes-promocion-info.component';


@NgModule({
  declarations: [SolicitudesPromocionInfoScreenComponent, SolicitudesPromocionInfoComponent],
  imports: [
    CommonModule,
    SolicitudesPromocionInfoScreenRoutingModule
  ]
})
export class SolicitudesPromocionInfoScreenModule { }
