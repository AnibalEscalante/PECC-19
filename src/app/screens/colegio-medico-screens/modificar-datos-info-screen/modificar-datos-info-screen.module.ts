import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarDatosInfoScreenRoutingModule } from './modificar-datos-info-screen-routing.module';
import { ModificarDatosInfoScreenComponent } from './modificar-datos-info-screen.component';
import { ModificarDatosInfoComponent } from '../../../components/users/colegio-medico/modificar-datos-info/modificar-datos-info.component';


@NgModule({
  declarations: [ModificarDatosInfoScreenComponent, ModificarDatosInfoComponent],
  imports: [
    CommonModule,
    ModificarDatosInfoScreenRoutingModule
  ]
})
export class ModificarDatosInfoScreenModule { }
