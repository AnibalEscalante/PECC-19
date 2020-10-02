import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostulacionesActivasScreenComponent } from './postulaciones-activas-screen.component';

const routes: Routes = [
  {
    path: '',
    component:PostulacionesActivasScreenComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostulacionesActivasScreenRoutingModule { }
