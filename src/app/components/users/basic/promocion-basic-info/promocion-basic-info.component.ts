import { Component, Input, OnInit } from '@angular/core';
import { DatoUsuario } from 'src/app/models/datousuario.model';

@Component({
  selector: 'app-promocion-basic-info',
  templateUrl: './promocion-basic-info.component.html',
  styleUrls: ['./promocion-basic-info.component.less']
})
export class PromocionBasicInfoComponent implements OnInit {
  mensaje: string = "";
  isDivVisible = false;
  constructor() {
  
  }

  ngOnInit(): void {
  }
  postulacion()
  {
    this.mensaje = "Confirmacion exitosa";
    this.isDivVisible = true;   
  }
}
