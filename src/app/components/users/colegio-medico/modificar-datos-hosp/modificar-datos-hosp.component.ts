import { Component, Input, OnInit } from '@angular/core';
import { DatoUsuario } from 'src/app/models/datousuario.model';

@Component({
  selector: 'app-modificar-datos-hosp',
  templateUrl: './modificar-datos-hosp.component.html',
  styleUrls: ['./modificar-datos-hosp.component.less']
})
export class ModificarDatosHospComponent implements OnInit {

  @Input()
  public datoUsuario: DatoUsuario;
  constructor() { }

  ngOnInit(): void {
  }

}
