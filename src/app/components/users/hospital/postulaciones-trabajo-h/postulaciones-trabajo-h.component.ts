import { Component, Input, OnInit } from '@angular/core';
import { DatoUsuario } from '../../../../models/datousuario.model';

@Component({
  selector: 'app-postulaciones-trabajo-h',
  templateUrl: './postulaciones-trabajo-h.component.html',
  styleUrls: ['./postulaciones-trabajo-h.component.less']
})
export class PostulacionesTrabajoHComponent implements OnInit {

  @Input()
  public datoUsuario: DatoUsuario;
  constructor() { }
  
  ngOnInit(): void {
  }
}
