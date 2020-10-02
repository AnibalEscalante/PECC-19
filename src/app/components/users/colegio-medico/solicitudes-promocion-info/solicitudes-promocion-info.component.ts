import { Component, Input, OnInit } from '@angular/core';
import { DatoUsuario } from 'src/app/models/datousuario.model';

@Component({
  selector: 'app-solicitudes-promocion-info',
  templateUrl: './solicitudes-promocion-info.component.html',
  styleUrls: ['./solicitudes-promocion-info.component.less']
})
export class SolicitudesPromocionInfoComponent implements OnInit {

  @Input()
  public datoUsuario: DatoUsuario;
  constructor() {

  }

  ngOnInit(): void {
  }

}
