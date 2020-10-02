import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostulacionesActivasHInfoScreenComponent } from './postulaciones-activas-h-info-screen.component';

const routes: Routes = [
  {
  path:'',
  component: PostulacionesActivasHInfoScreenComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostulacionesActivasHInfoScreenRoutingModule { }
