import { Component, OnInit } from '@angular/core';
import { DatoUsuario } from '../../../models/datousuario.model';
import { DatousuarioService } from '../../../services/datousuario/datousuario.service';

@Component({
  selector: 'app-postulaciones-activas-h-screen',
  templateUrl: './postulaciones-activas-h-screen.component.html',
  styleUrls: ['./postulaciones-activas-h-screen.component.less']
})
export class PostulacionesActivasHScreenComponent implements OnInit {

  public datosUsuario: DatoUsuario[];
  constructor(private datosusuarioService: DatousuarioService){

  }
  ngOnInit(): void {
    this.datosUsuario = this.datosusuarioService.getAllDatosUsuario();
  }
}
