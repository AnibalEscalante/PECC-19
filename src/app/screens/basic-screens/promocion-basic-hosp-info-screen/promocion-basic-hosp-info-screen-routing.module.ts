import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromocionBasicHospInfoScreenComponent } from './promocion-basic-hosp-info-screen.component';

const routes: Routes = [
  {
    path: '',
    component: PromocionBasicHospInfoScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromocionBasicHospInfoScreenRoutingModule { }
