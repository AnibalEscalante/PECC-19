import { Component, Input, OnInit } from '@angular/core';
import { DatoUsuario } from '../../../../models/datousuario.model';

@Component({
  selector: 'app-solicitudes-promocion-hosp',
  templateUrl: './solicitudes-promocion-hosp.component.html',
  styleUrls: ['./solicitudes-promocion-hosp.component.less']
})
export class SolicitudesPromocionHospComponent implements OnInit {

  @Input()
  public datoUsuario: DatoUsuario;
  constructor() { }

  ngOnInit(): void {
  }


}
