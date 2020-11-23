import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModificarDatosHospInfoScreenComponent } from './modificar-datos-hosp-info-screen.component';

const routes: Routes = [
  {
    path: '',
    component: ModificarDatosHospInfoScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificarDatosHospInfoScreenRoutingModule { }
