import { Component, Input, OnInit } from '@angular/core';
import { DatoUsuario } from '../../../../models/datousuario.model';

@Component({
  selector: 'app-postulaciones-activas-h-info',
  templateUrl: './postulaciones-activas-h-info.component.html',
  styleUrls: ['./postulaciones-activas-h-info.component.less']
})
export class PostulacionesActivasHInfoComponent implements OnInit {

  @Input()
  public datoUsuario: DatoUsuario;
  constructor() {

  }

  ngOnInit(): void {
  }
}
