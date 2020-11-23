import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promocion-basic-hosp-info',
  templateUrl: './promocion-basic-hosp-info.component.html',
  styleUrls: ['./promocion-basic-hosp-info.component.less']
})
export class PromocionBasicHospInfoComponent implements OnInit {

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
