import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostulacionesTrabajoHScreenComponent } from './postulaciones-trabajo-h-screen.component';

const routes: Routes = [
  {
  path:'',
  component: PostulacionesTrabajoHScreenComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostulacionesTrabajoHScreenRoutingModule { }
