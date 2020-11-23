import { Component, OnInit } from '@angular/core';
import { DatoUsuario } from 'src/app/models/datousuario.model';
import { DatousuarioService } from '../../../services/datousuario/datousuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solicitudes-promocion-hosp-info-screen',
  templateUrl: './solicitudes-promocion-hosp-info-screen.component.html',
  styleUrls: ['./solicitudes-promocion-hosp-info-screen.component.less']
})
export class SolicitudesPromocionHospInfoScreenComponent implements OnInit {

  public id: number | string;
  public datosUsuario: DatoUsuario;
  constructor(
    private infousuarioService: DatousuarioService,
    private activatedRoute: ActivatedRoute
  ){

  }
  ngOnInit(): void{
    this.id = this.activatedRoute.snapshot.params['id'];
    this.datosUsuario = this.infousuarioService.getDatosUsuarioById(this.id);
  }

}
