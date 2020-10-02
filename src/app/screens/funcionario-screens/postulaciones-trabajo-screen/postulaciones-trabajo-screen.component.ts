import { Component, OnInit } from '@angular/core';
import { DatoClinica } from '../../../models/datoclinica.model';
import { InfoclinicaService } from '../../../services/infoclinica/infoclinica.service';

@Component({
  selector: 'app-postulaciones-trabajo-screen',
  templateUrl: './postulaciones-trabajo-screen.component.html',
  styleUrls: ['./postulaciones-trabajo-screen.component.less']
})
export class PostulacionesTrabajoScreenComponent implements OnInit {

  public datosClinica: DatoClinica[];

    constructor(private informacionClinica: InfoclinicaService){

    }

    ngOnInit(): void {
      this.datosClinica = this.informacionClinica.getAlldatosClinica();
    }

}
