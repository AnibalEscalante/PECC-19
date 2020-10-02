import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarDatosRoutingModule } from './modificar-datos-routing.module';
import { ModificarDatosComponent } from './modificar-datos.component';


@NgModule({
  declarations: [ModificarDatosComponent],
  imports: [
    CommonModule,
    ModificarDatosRoutingModule
  ]
})
export class ModificarDatosModule { }
