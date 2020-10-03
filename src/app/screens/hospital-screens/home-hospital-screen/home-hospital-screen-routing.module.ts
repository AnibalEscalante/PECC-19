import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeHospitalScreenComponent } from './home-hospital-screen.component';



const routes: Routes = [
  {
    path:'',
    component: HomeHospitalScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeHospitalScreenRoutingModule { }
