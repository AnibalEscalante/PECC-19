import { Injectable } from '@angular/core';
import { DatoUsuario } from '../../models/datousuario.model';
import { informacionUsuario } from './informacionUsuario.const';

@Injectable({
  providedIn: 'root'
})
export class DatousuarioService {

  private datosUsuario: DatoUsuario[];
  constructor(){
    this.datosUsuario = informacionUsuario;
  }

  public getAllDatosUsuario(): DatoUsuario[] {
    return this.datosUsuario;
  }

  public getDatosUsuarioById(id: number | string): DatoUsuario{
    return this.datosUsuario.find((datosUsuario: DatoUsuario) => datosUsuario._idU.toString() === id);
  }

}
