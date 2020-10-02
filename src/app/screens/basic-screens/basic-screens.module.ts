import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromocionBasicScreenComponent } from './promocion-basic-screen/promocion-basic-screen.component';
import { PromocionBasicScreenInfoComponent } from './promocion-basic-screen-info/promocion-basic-screen-info.component';
import { PromocionBasicComponent } from '../../components/users/basic/promocion-basic/promocion-basic.component';
import { PromocionBasicInfoComponent } from '../../components/users/basic/promocion-basic-info/promocion-basic-info.component';



@NgModule({
  declarations: [PromocionBasicComponent, PromocionBasicInfoComponent, PromocionBasicScreenComponent, PromocionBasicScreenInfoComponent],
  imports: [
    CommonModule
  ]
})
export class BasicScreensModule { }
