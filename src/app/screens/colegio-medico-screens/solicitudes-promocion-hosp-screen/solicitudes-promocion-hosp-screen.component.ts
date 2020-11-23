import { Component, OnInit } from '@angular/core';
import { DatoUsuario } from '../../../models/datousuario.model';
import { DatousuarioService } from '../../../services/datousuario/datousuario.service';

@Component({
  selector: 'app-solicitudes-promocion-hosp-screen',
  templateUrl: './solicitudes-promocion-hosp-screen.component.html',
  styleUrls: ['./solicitudes-promocion-hosp-screen.component.less']
})
export class SolicitudesPromocionHospScreenComponent implements OnInit {

  public datosUsuario: DatoUsuario[];
  constructor(private datosusuarioService: DatousuarioService){

  }
  ngOnInit(): void {
    this.datosUsuario = this.datosusuarioService.getAllDatosUsuario();
  }

}
