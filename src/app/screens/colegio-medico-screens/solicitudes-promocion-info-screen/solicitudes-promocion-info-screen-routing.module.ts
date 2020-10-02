import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudesPromocionInfoScreenComponent } from './solicitudes-promocion-info-screen.component';

const routes: Routes = [
  {
    path:'',
    component: SolicitudesPromocionInfoScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesPromocionInfoScreenRoutingModule { }
