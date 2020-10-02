import { Component, OnInit } from '@angular/core';
import { DatoUsuario } from '../../../models/datousuario.model';
import { DatousuarioService } from '../../../services/datousuario/datousuario.service';

@Component({
  selector: 'app-modificar-datos-screen',
  templateUrl: './modificar-datos-screen.component.html',
  styleUrls: ['./modificar-datos-screen.component.less']
})
export class ModificarDatosScreenComponent implements OnInit {

  public datosUsuarios: DatoUsuario[];
  constructor(private datosusuarioService: DatousuarioService){

  }
  ngOnInit(): void {
    this.datosUsuarios = this.datosusuarioService.getAllDatosUsuario();
  }
}
