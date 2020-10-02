import { Component, OnInit } from '@angular/core';
import { DatoClinica } from '../../../models/datoclinica.model';
import { InfoclinicaService } from '../../../services/infoclinica/infoclinica.service';

@Component({
  selector: 'app-postulaciones-activas-screen',
  templateUrl: './postulaciones-activas-screen.component.html',
  styleUrls: ['./postulaciones-activas-screen.component.less']
})
export class PostulacionesActivasScreenComponent implements OnInit {

  public datosClinica: DatoClinica[];

  constructor(private infoclinicaService: InfoclinicaService){

  }

  ngOnInit(): void {
    this.datosClinica = this.infoclinicaService.getAlldatosClinica();
  }

}
