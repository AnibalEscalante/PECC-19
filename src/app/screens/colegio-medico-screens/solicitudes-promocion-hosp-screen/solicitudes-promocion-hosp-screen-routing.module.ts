import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudesPromocionHospScreenComponent } from './solicitudes-promocion-hosp-screen.component';

const routes: Routes = [
  {
    path:'',
    component: SolicitudesPromocionHospScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesPromocionHospScreenRoutingModule { }
