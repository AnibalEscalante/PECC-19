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
  mensaje1: string = "";
  mensaje2: string = "";
  isDivVisible1 = false;
  isDivVisible2 = false;
  descargado = false;
  constructor() {

  }

  ngOnInit(): void {
    this.descargado = false;
  }
  postulacion1()
  {
    this.mensaje1 = "Solicitud aceptada";
    this.isDivVisible1 = true;
    this.descargado = false;   
  }
  postulacion2()
  {
    this.mensaje2 = "Solicitud rechazada";
    this.isDivVisible2 = true;
    this.descargado = false;
  }
  Descargado()
  {
    this.descargado = true;
  }
}
