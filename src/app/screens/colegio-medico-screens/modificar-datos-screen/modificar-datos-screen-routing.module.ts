import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModificarDatosScreenComponent } from './modificar-datos-screen.component';

const routes: Routes = [
  {
  path:'',
  component: ModificarDatosScreenComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificarDatosScreenRoutingModule { }
