import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudesPromocionScreenComponent } from './solicitudes-promocion-screen.component';

const routes: Routes = [
  {
    path:'',
    component: SolicitudesPromocionScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesPromocionScreenRoutingModule { }
