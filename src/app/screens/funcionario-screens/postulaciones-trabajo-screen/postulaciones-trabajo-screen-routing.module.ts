import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostulacionesTrabajoScreenComponent } from './postulaciones-trabajo-screen.component';


const routes: Routes = [
  {
    path: '',
    component: PostulacionesTrabajoScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostulacionesTrabajoScreenRoutingModule { }
