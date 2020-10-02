import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarDatosInfoRoutingModule } from './modificar-datos-info-routing.module';
import { ModificarDatosInfoComponent } from './modificar-datos-info.component';


@NgModule({
  declarations: [ModificarDatosInfoComponent],
  imports: [
    CommonModule,
    ModificarDatosInfoRoutingModule
  ]
})
export class ModificarDatosInfoModule { }
