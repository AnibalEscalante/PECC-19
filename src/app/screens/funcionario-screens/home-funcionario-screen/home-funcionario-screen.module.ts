import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFuncionarioScreenRoutingModule } from './home-funcionario-screen-routing.module';
import { HomeFuncionarioScreenComponent } from './home-funcionario-screen.component';


@NgModule({
  declarations: [HomeFuncionarioScreenComponent],
  imports: [
    CommonModule,
    HomeFuncionarioScreenRoutingModule
  ]
})
export class HomeFuncionarioScreenModule { }
