import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesPromocionScreenRoutingModule } from './solicitudes-promocion-screen-routing.module';
import { SolicitudesPromocionScreenComponent } from './solicitudes-promocion-screen.component';
import { SolicitudesPromocionComponent } from '../../../components/users/colegio-medico/solicitudes-promocion/solicitudes-promocion.component';


@NgModule({
  declarations: [SolicitudesPromocionScreenComponent, SolicitudesPromocionComponent],
  imports: [
    CommonModule,
    SolicitudesPromocionScreenRoutingModule
  ]
})
export class SolicitudesPromocionScreenModule { }
