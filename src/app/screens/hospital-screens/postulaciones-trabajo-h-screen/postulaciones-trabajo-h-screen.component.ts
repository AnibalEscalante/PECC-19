import { Component, OnInit } from '@angular/core';
import { DatoUsuario } from '../../../models/datousuario.model';
import { DatousuarioService } from '../../../services/datousuario/datousuario.service';

@Component({
  selector: 'app-postulaciones-trabajo-h-screen',
  templateUrl: './postulaciones-trabajo-h-screen.component.html',
  styleUrls: ['./postulaciones-trabajo-h-screen.component.less']
})
export class PostulacionesTrabajoHScreenComponent implements OnInit {

  public datosUsuario: DatoUsuario[];
  constructor(private datosusuarioService: DatousuarioService){

  }
  ngOnInit(): void {
    this.datosUsuario = this.datosusuarioService.getAllDatosUsuario();
  }
}
