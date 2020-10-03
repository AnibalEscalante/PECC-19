import { Component, Input, OnInit } from '@angular/core';
import { DatoClinica } from '../../../../models/datoclinica.model';

@Component({
  selector: 'app-postulaciones-trabajo-info',
  templateUrl: './postulaciones-trabajo-info.component.html',
  styleUrls: ['./postulaciones-trabajo-info.component.less']
})
export class PostulacionesTrabajoInfoComponent implements OnInit {

  @Input()
  public datoClinica: DatoClinica;

  mensaje: string = "";
  isDivVisible = false;
  
  constructor(){
  }
  
  ngOnInit(): void {
  }
  
  postulacion()
  {
    this.mensaje = "Postulacion exitosa";
    this.isDivVisible = true;   
  }
}
