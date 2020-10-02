import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostulacionesActivasHScreenComponent } from './postulaciones-activas-h-screen.component';

const routes: Routes = [
  {
    path:'',
    component: PostulacionesActivasHScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostulacionesActivasHScreenRoutingModule { }
