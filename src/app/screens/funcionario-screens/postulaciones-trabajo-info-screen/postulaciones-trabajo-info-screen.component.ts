import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatoClinica } from '../../../models/datoclinica.model';
import { InfoclinicaService } from '../../../services/infoclinica/infoclinica.service';

@Component({
  selector: 'app-postulaciones-trabajo-info-screen',
  templateUrl: './postulaciones-trabajo-info-screen.component.html',
  styleUrls: ['./postulaciones-trabajo-info-screen.component.less']
})
export class PostulacionesTrabajoInfoScreenComponent implements OnInit {

  public id: number | string;
  public datosClinica: DatoClinica;
  constructor(
    private infoclinicaService: InfoclinicaService,
    private activatedRoute: ActivatedRoute
  ){

  }
  ngOnInit(): void {
      this.id = this.activatedRoute.snapshot.params['id'];
      this.datosClinica = this.infoclinicaService.getdatosClinicaById(this.id);
  }

}
