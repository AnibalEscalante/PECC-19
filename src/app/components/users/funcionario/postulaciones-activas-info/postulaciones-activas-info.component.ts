import { Component, Input, OnInit } from '@angular/core';
import { DatoClinica } from '../../../../models/datoclinica.model';

@Component({
  selector: 'app-postulaciones-activas-info',
  templateUrl: './postulaciones-activas-info.component.html',
  styleUrls: ['./postulaciones-activas-info.component.less']
})
export class PostulacionesActivasInfoComponent implements OnInit {

  @Input()
  public datoClinica: DatoClinica;

  constructor(){
  }

  ngOnInit(): void {
  }

}
