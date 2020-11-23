import { Component, Input, OnInit } from '@angular/core';
import { DatoUsuario } from 'src/app/models/datousuario.model';

@Component({
  selector: 'app-modificar-datos-hosp-info',
  templateUrl: './modificar-datos-hosp-info.component.html',
  styleUrls: ['./modificar-datos-hosp-info.component.less']
})
export class ModificarDatosHospInfoComponent implements OnInit {

  @Input()
  public datoUsuario: DatoUsuario;
  constructor() {

  }

  ngOnInit(): void {
  }

}
