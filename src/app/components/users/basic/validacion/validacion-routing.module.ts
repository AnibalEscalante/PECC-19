import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidacionComponent } from './validacion.component';

const routes: Routes = [
  {
    path:'',
    component:ValidacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidacionRoutingModule { }
