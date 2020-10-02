import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModificarDatosInfoScreenComponent } from './modificar-datos-info-screen.component';

const routes: Routes = [
  {
    path:'',
    component:ModificarDatosInfoScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificarDatosInfoScreenRoutingModule { }
