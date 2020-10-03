import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBasicScreenComponent } from './home-basic-screen.component';

const routes: Routes = [
  {
    path:'',
    component: HomeBasicScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeBasicScreenRoutingModule { }
