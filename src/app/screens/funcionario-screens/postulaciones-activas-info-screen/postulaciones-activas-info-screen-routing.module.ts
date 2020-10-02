import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostulacionesActivasInfoScreenComponent } from './postulaciones-activas-info-screen.component';

const routes: Routes = [
  {
  path: '',
  component: PostulacionesActivasInfoScreenComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostulacionesActivasInfoScreenRoutingModule { }
