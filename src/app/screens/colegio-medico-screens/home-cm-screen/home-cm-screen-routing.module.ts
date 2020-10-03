import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCmScreenComponent } from './home-cm-screen.component';

const routes: Routes = [
  {
    path:'',
    component:HomeCmScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeCmScreenRoutingModule { }
