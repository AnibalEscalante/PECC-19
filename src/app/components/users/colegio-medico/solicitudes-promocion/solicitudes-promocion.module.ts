import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesPromocionRoutingModule } from './solicitudes-promocion-routing.module';
import { SolicitudesPromocionComponent } from './solicitudes-promocion.component';


@NgModule({
  declarations: [SolicitudesPromocionComponent],
  imports: [
    CommonModule,
    SolicitudesPromocionRoutingModule
  ]
})
export class SolicitudesPromocionModule { }
