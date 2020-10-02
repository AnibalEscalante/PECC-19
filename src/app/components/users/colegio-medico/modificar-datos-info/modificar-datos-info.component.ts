import { Component, Input, OnInit } from '@angular/core';
import { DatoUsuario } from '../../../../models/datousuario.model';

@Component({
  selector: 'app-modificar-datos-info',
  templateUrl: './modificar-datos-info.component.html',
  styleUrls: ['./modificar-datos-info.component.less']
})
export class ModificarDatosInfoComponent implements OnInit {

  @Input()
  public datoUsuario: DatoUsuario;
  constructor() {

  }

  ngOnInit(): void {
  }
}
