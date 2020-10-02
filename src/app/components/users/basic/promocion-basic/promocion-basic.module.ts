import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromocionBasicRoutingModule } from './promocion-basic-routing.module';
import { PromocionBasicComponent } from './promocion-basic.component';


@NgModule({
  declarations: [PromocionBasicComponent],
  imports: [
    CommonModule,
    PromocionBasicRoutingModule
  ]
})
export class PromocionBasicModule { }
