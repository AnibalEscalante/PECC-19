import { Component, Input, OnInit } from '@angular/core';
import { DatoUsuario } from '../../../../models/datousuario.model';

@Component({
  selector: 'app-postulaciones-trabajo-h-info',
  templateUrl: './postulaciones-trabajo-h-info.component.html',
  styleUrls: ['./postulaciones-trabajo-h-info.component.less']
})
export class PostulacionesTrabajoHInfoComponent implements OnInit {

  @Input()
  public datoUsuario: DatoUsuario;
  constructor() {

  }

  ngOnInit(): void {
  }
}
