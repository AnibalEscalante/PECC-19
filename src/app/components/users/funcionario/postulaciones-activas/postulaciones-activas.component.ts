import { Component, Input, OnInit } from '@angular/core';
import { DatoClinica } from '../../../../models/datoclinica.model';

@Component({
  selector: 'app-postulaciones-activas',
  templateUrl: './postulaciones-activas.component.html',
  styleUrls: ['./postulaciones-activas.component.less']
})
export class PostulacionesActivasComponent implements OnInit {

  @Input()
  public datoClinica: DatoClinica;

  constructor(){
  }

  ngOnInit(): void {
  }

}
