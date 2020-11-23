import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModificarDatosHospScreenComponent } from './modificar-datos-hosp-screen.component';

const routes: Routes = [
  {
    path: '',
    component: ModificarDatosHospScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificarDatosHospScreenRoutingModule { }
