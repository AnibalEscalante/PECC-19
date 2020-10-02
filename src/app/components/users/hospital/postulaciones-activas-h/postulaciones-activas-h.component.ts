import { Component, Input, OnInit } from '@angular/core';
import { DatoUsuario } from 'src/app/models/datousuario.model';

@Component({
  selector: 'app-postulaciones-acvitas-h',
  templateUrl: './postulaciones-activas-h.component.html',
  styleUrls: ['./postulaciones-activas-h.component.less']
})
export class PostulacionesActivasHComponent implements OnInit {

  @Input()
  public datoUsuario: DatoUsuario;
  constructor() { }

  ngOnInit(): void {
  }
}
