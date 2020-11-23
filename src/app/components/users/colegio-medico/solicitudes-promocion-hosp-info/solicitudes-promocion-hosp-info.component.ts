import { Component, Input, OnInit } from '@angular/core';
import { DatoUsuario } from 'src/app/models/datousuario.model';

@Component({
  selector: 'app-solicitudes-promocion-hosp-info',
  templateUrl: './solicitudes-promocion-hosp-info.component.html',
  styleUrls: ['./solicitudes-promocion-hosp-info.component.less']
})
export class SolicitudesPromocionHospInfoComponent implements OnInit {

  @Input()
  public datoUsuario: DatoUsuario;
  constructor() {

  }

  ngOnInit(): void {
  }


}
