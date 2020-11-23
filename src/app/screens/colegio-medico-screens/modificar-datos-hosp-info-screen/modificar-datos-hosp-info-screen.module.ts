import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarDatosHospInfoScreenRoutingModule } from './modificar-datos-hosp-info-screen-routing.module';
import { ModificarDatosHospInfoScreenComponent } from './modificar-datos-hosp-info-screen.component';
import { ModificarDatosHospInfoComponent } from '../../../components/users/colegio-medico/modificar-datos-hosp-info/modificar-datos-hosp-info.component';


@NgModule({
  declarations: [ModificarDatosHospInfoScreenComponent, ModificarDatosHospInfoComponent],
  imports: [
    CommonModule,
    ModificarDatosHospInfoScreenRoutingModule
  ]
})
export class ModificarDatosHospInfoScreenModule { }
