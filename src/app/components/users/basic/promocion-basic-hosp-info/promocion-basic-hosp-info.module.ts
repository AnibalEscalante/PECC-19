import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromocionBasicHospInfoRoutingModule } from './promocion-basic-hosp-info-routing.module';
import { PromocionBasicHospInfoComponent } from './promocion-basic-hosp-info.component';


@NgModule({
  declarations: [PromocionBasicHospInfoComponent],
  imports: [
    CommonModule,
    PromocionBasicHospInfoRoutingModule
  ]
})
export class PromocionBasicHospInfoModule { }
