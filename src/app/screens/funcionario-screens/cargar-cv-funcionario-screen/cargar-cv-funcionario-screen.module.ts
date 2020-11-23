import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargarCvFuncionarioScreenRoutingModule } from './cargar-cv-funcionario-screen-routing.module';
import { CargarCvFuncionarioComponent } from '../../../components/users/funcionario/cargar-cv-funcionario/cargar-cv-funcionario.component';
import { CargarCvFuncionarioScreenComponent } from './cargar-cv-funcionario-screen.component';



@NgModule({
  declarations: [CargarCvFuncionarioComponent, CargarCvFuncionarioScreenComponent],
  imports: [
    CommonModule,
    CargarCvFuncionarioScreenRoutingModule
  ]
})
export class CargarCvFuncionarioScreenModule { }
