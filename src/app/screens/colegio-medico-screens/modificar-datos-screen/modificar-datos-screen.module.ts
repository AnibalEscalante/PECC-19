import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarDatosScreenRoutingModule } from './modificar-datos-screen-routing.module';
import { ModificarDatosScreenComponent } from './modificar-datos-screen.component';
import { ModificarDatosComponent } from '../../../components/users/colegio-medico/modificar-datos/modificar-datos.component';


@NgModule({
  declarations: [ModificarDatosScreenComponent, ModificarDatosComponent],
  imports: [
    CommonModule,
    ModificarDatosScreenRoutingModule
  ]
})
export class ModificarDatosScreenModule { }
