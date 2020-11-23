import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargarCvFuncionarioScreenComponent } from './cargar-cv-funcionario-screen.component';


const routes: Routes = [
  {
    path: '',
    component: CargarCvFuncionarioScreenComponent
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargarCvFuncionarioScreenRoutingModule { }
