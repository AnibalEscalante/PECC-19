import { Component, OnInit } from '@angular/core';
import { DatoUsuario } from '../../../models/datousuario.model';
import { DatousuarioService } from '../../../services/datousuario/datousuario.service';

@Component({
  selector: 'app-solicitudes-promocion-screen',
  templateUrl: './solicitudes-promocion-screen.component.html',
  styleUrls: ['./solicitudes-promocion-screen.component.less']
})
export class SolicitudesPromocionScreenComponent implements OnInit {

  public datosUsuario: DatoUsuario[];
  constructor(private datosusuarioService: DatousuarioService){

  }
  ngOnInit(): void {
    this.datosUsuario = this.datosusuarioService.getAllDatosUsuario();
  }
}
