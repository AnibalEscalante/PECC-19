import { Component, Input, OnInit } from '@angular/core';
import { DatoClinica } from '../../../../models/datoclinica.model';

@Component({
  selector: 'app-cargar-cv-funcionario',
  templateUrl: './cargar-cv-funcionario.component.html',
  styleUrls: ['./cargar-cv-funcionario.component.less']
})
export class CargarCvFuncionarioComponent implements OnInit {

  @Input()
  public datoClinica: DatoClinica;

  constructor(){
  }

  ngOnInit(): void {
  }


}
