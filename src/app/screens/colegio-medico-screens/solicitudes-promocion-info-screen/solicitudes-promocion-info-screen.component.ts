import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatoUsuario } from 'src/app/models/datousuario.model';
import { DatousuarioService } from '../../../services/datousuario/datousuario.service';

@Component({
  selector: 'app-solicitudes-promocion-info-screen',
  templateUrl: './solicitudes-promocion-info-screen.component.html',
  styleUrls: ['./solicitudes-promocion-info-screen.component.less']
})
export class SolicitudesPromocionInfoScreenComponent implements OnInit {

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
