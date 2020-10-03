import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SituacionHospitalComponent } from './situacion-hospital.component';

const routes: Routes = [
  {
    path:'',
    component:SituacionHospitalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SituacionHospitalRoutingModule { }
