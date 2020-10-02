import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromocionBasicInfoRoutingModule } from './promocion-basic-info-routing.module';
import { PromocionBasicInfoComponent } from './promocion-basic-info.component';


@NgModule({
  declarations: [PromocionBasicInfoComponent],
  imports: [
    CommonModule,
    PromocionBasicInfoRoutingModule
  ]
})
export class PromocionBasicInfoModule { }
