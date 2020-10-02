import { Component, Input, OnInit } from '@angular/core';
import { DatoUsuario } from 'src/app/models/datousuario.model';

@Component({
  selector: 'app-modificar-datos',
  templateUrl: './modificar-datos.component.html',
  styleUrls: ['./modificar-datos.component.less']
})
export class ModificarDatosComponent implements OnInit {

  @Input()
  public datoUsuario: DatoUsuario;
  constructor() { }

  ngOnInit(): void {
  }

}
