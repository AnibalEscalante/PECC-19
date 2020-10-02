import { Component, Input, OnInit } from '@angular/core';
import { DatoUsuario } from '../../../../models/datousuario.model';
import { DatousuarioService } from '../../../../services/datousuario/datousuario.service';

@Component({
  selector: 'app-promocion-basic',
  templateUrl: './promocion-basic.component.html',
  styleUrls: ['./promocion-basic.component.less']
})
export class PromocionBasicComponent implements OnInit {
  @Input()
  public datoUsuario: DatoUsuario;
  constructor() { }

  ngOnInit(): void {
  }
}
