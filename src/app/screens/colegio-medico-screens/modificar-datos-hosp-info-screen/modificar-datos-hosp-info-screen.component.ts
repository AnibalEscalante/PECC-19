import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatousuarioService } from '../../../services/datousuario/datousuario.service';
import { DatoUsuario } from 'src/app/models/datousuario.model';

@Component({
  selector: 'app-modificar-datos-hosp-info-screen',
  templateUrl: './modificar-datos-hosp-info-screen.component.html',
  styleUrls: ['./modificar-datos-hosp-info-screen.component.less']
})
export class ModificarDatosHospInfoScreenComponent implements OnInit {

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
