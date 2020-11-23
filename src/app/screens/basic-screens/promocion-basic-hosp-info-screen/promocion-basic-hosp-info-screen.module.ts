import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromocionBasicHospInfoScreenRoutingModule } from './promocion-basic-hosp-info-screen-routing.module';
import { PromocionBasicHospInfoScreenComponent } from './promocion-basic-hosp-info-screen.component';
import { PromocionBasicHospInfoComponent } from '../../../components/users/basic/promocion-basic-hosp-info/promocion-basic-hosp-info.component';


@NgModule({
  declarations: [PromocionBasicHospInfoScreenComponent, PromocionBasicHospInfoComponent],
  imports: [
    CommonModule,
    PromocionBasicHospInfoScreenRoutingModule
  ]
})
export class PromocionBasicHospInfoScreenModule { }
