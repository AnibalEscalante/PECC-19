import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarDatosHospRoutingModule } from './modificar-datos-hosp-routing.module';
import { ModificarDatosHospComponent } from './modificar-datos-hosp.component';


@NgModule({
  declarations: [ModificarDatosHospComponent],
  imports: [
    CommonModule,
    ModificarDatosHospRoutingModule
  ]
})
export class ModificarDatosHospModule { }
