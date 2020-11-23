import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarDatosHospInfoRoutingModule } from './modificar-datos-hosp-info-routing.module';
import { ModificarDatosHospInfoComponent } from './modificar-datos-hosp-info.component';


@NgModule({
  declarations: [ModificarDatosHospInfoComponent],
  imports: [
    CommonModule,
    ModificarDatosHospInfoRoutingModule
  ]
})
export class ModificarDatosHospInfoModule { }
