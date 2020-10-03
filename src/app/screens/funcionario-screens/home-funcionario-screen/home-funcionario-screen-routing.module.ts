import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeFuncionarioScreenComponent } from './home-funcionario-screen.component';

const routes: Routes = [
  {
    path:'',
    component:HomeFuncionarioScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeFuncionarioScreenRoutingModule { }
