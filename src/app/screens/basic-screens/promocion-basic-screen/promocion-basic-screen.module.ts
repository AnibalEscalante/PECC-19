import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromocionBasicScreenRoutingModule } from './promocion-basic-screen-routing.module';
import { PromocionBasicScreenComponent } from './promocion-basic-screen.component';
import { PromocionBasicComponent } from '../../../components/users/basic/promocion-basic/promocion-basic.component';


@NgModule({
  declarations: [PromocionBasicScreenComponent, PromocionBasicComponent],
  imports: [
    CommonModule,
    PromocionBasicScreenRoutingModule
  ]
})
export class PromocionBasicScreenModule { }
