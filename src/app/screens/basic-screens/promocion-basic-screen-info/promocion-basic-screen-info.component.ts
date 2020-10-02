import { Component, OnInit } from '@angular/core';
import { DatoUsuario } from 'src/app/models/datousuario.model';
import { DatousuarioService } from '../../../services/datousuario/datousuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-promocion-basic-screen-info',
  templateUrl: './promocion-basic-screen-info.component.html',
  styleUrls: ['./promocion-basic-screen-info.component.less']
})
export class PromocionBasicScreenInfoComponent implements OnInit {

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
