import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostulacionesTrabajoHInfoScreenComponent } from './postulaciones-trabajo-h-info-screen.component';

const routes: Routes = [
  {
    path: '',
    component: PostulacionesTrabajoHInfoScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostulacionesTrabajoHInfoScreenRoutingModule { }
