import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostulacionesTrabajoInfoScreenComponent } from './postulaciones-trabajo-info-screen.component';

const routes: Routes = [
  {
    path: '',
    component:PostulacionesTrabajoInfoScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostulacionesTrabajoInfoScreenRoutingModule { }
