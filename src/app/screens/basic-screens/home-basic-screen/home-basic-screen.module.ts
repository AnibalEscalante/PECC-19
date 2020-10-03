import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeBasicScreenRoutingModule } from './home-basic-screen-routing.module';
import { HomeBasicScreenComponent } from './home-basic-screen.component';


@NgModule({
  declarations: [HomeBasicScreenComponent],
  imports: [
    CommonModule,
    HomeBasicScreenRoutingModule
  ]
})
export class HomeBasicScreenModule { }
