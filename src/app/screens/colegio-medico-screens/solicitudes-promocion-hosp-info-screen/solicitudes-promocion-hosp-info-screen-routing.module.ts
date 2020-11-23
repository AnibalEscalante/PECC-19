import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudesPromocionHospInfoScreenComponent } from './solicitudes-promocion-hosp-info-screen.component';

const routes: Routes = [
  {
    path: '',
    component: SolicitudesPromocionHospInfoScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesPromocionHospInfoScreenRoutingModule { }
