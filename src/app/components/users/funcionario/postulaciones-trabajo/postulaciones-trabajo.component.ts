import { Component, Input, OnInit } from '@angular/core';
import { DatoClinica } from '../../../../models/datoclinica.model';

@Component({
  selector: 'app-postulaciones-trabajo',
  templateUrl: './postulaciones-trabajo.component.html',
  styleUrls: ['./postulaciones-trabajo.component.less']
})
export class PostulacionesTrabajoComponent implements OnInit {

  @Input()
  public datoClinica: DatoClinica;

  constructor(){
  }

  ngOnInit(): void {
  }

}
