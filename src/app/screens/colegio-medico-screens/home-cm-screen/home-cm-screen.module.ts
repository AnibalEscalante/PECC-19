import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeCmScreenRoutingModule } from './home-cm-screen-routing.module';
import { HomeCmScreenComponent } from './home-cm-screen.component';


@NgModule({
  declarations: [HomeCmScreenComponent],
  imports: [
    CommonModule,
    HomeCmScreenRoutingModule
  ]
})
export class HomeCmScreenModule { }
