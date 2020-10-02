import { Component, OnInit } from '@angular/core';
import { DatoUsuario } from 'src/app/models/datousuario.model';
import { DatousuarioService } from '../../../services/datousuario/datousuario.service';

@Component({
  selector: 'app-promocion-basic-screen',
  templateUrl: './promocion-basic-screen.component.html',
  styleUrls: ['./promocion-basic-screen.component.less']
})
export class PromocionBasicScreenComponent implements OnInit {

  public datosUsuarios: DatoUsuario[];
  constructor(private datosusuarioService: DatousuarioService){

  }
  ngOnInit(): void {
    this.datosUsuarios = this.datosusuarioService.getAllDatosUsuario();
  }
}
