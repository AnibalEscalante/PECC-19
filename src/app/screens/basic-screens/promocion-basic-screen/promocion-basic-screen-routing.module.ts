import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromocionBasicScreenComponent } from './promocion-basic-screen.component';

const routes: Routes = [
  {
    path:'',
    component: PromocionBasicScreenComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromocionBasicScreenRoutingModule { }
