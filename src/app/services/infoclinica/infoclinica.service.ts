import { Injectable } from '@angular/core';
import { DatoClinica } from '../../models/datoclinica.model';
import { informacionClinica } from './informacionClinica.const';

@Injectable({
  providedIn: 'root'
})
export class InfoclinicaService {

  private datosClinica: DatoClinica[];
  constructor(){
    this.datosClinica = informacionClinica;
  }

  public getAlldatosClinica(): DatoClinica[] {
     return this.datosClinica
  }

  public getdatosClinicaById(id: number | string): DatoClinica{
    return this.datosClinica.find((datosClinica: DatoClinica) => datosClinica._id.toString() === id);
  }
}
