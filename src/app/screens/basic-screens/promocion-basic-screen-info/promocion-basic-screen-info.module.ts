import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromocionBasicScreenInfoRoutingModule } from './promocion-basic-screen-info-routing.module';
import { PromocionBasicScreenInfoComponent } from './promocion-basic-screen-info.component';
import { PromocionBasicInfoComponent } from '../../../components/users/basic/promocion-basic-info/promocion-basic-info.component';


@NgModule({
  declarations: [PromocionBasicScreenInfoComponent, PromocionBasicInfoComponent],
  imports: [
    CommonModule,
    PromocionBasicScreenInfoRoutingModule
  ]
})
export class PromocionBasicScreenInfoModule { }
