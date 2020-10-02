import { Component, OnInit } from '@angular/core';
import { DatoUsuario } from '../../../models/datousuario.model';
import { DatousuarioService } from '../../../services/datousuario/datousuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postulaciones-trabajo-h-info-screen',
  templateUrl: './postulaciones-trabajo-h-info-screen.component.html',
  styleUrls: ['./postulaciones-trabajo-h-info-screen.component.less']
})
export class PostulacionesTrabajoHInfoScreenComponent implements OnInit {

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
