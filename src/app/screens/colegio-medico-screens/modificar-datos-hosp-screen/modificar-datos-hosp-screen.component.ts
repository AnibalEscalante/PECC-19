import { Component, OnInit } from '@angular/core';
import { DatoUsuario } from 'src/app/models/datousuario.model';
import { DatousuarioService } from '../../../services/datousuario/datousuario.service';

@Component({
  selector: 'app-modificar-datos-hosp-screen',
  templateUrl: './modificar-datos-hosp-screen.component.html',
  styleUrls: ['./modificar-datos-hosp-screen.component.less']
})
export class ModificarDatosHospScreenComponent implements OnInit {

  public datosUsuarios: DatoUsuario[];
  constructor(private datosusuarioService: DatousuarioService){

  }
  ngOnInit(): void {
    this.datosUsuarios = this.datosusuarioService.getAllDatosUsuario();
  }

}
