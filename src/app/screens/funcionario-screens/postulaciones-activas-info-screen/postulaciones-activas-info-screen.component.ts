import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatoClinica } from '../../../models/datoclinica.model';
import { InfoclinicaService } from '../../../services/infoclinica/infoclinica.service';

@Component({
  selector: 'app-postulaciones-activas-info-screen',
  templateUrl: './postulaciones-activas-info-screen.component.html',
  styleUrls: ['./postulaciones-activas-info-screen.component.less']
})
export class PostulacionesActivasInfoScreenComponent implements OnInit {

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
