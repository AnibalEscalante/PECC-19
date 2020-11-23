import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarDatosHospScreenRoutingModule } from './modificar-datos-hosp-screen-routing.module';
import { ModificarDatosHospScreenComponent } from './modificar-datos-hosp-screen.component';
import { ModificarDatosHospComponent } from '../../../components/users/colegio-medico/modificar-datos-hosp/modificar-datos-hosp.component';


@NgModule({
  declarations: [ModificarDatosHospScreenComponent, ModificarDatosHospComponent],
  imports: [
    CommonModule,
    ModificarDatosHospScreenRoutingModule
  ]
})
export class ModificarDatosHospScreenModule { }
