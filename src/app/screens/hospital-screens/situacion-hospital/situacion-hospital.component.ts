import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatoUsuario } from '../../../models/datousuario.model';


@Component({
  selector: 'app-situacion-hospital',
  templateUrl: './situacion-hospital.component.html',
  styleUrls: ['./situacion-hospital.component.less']
})
export class SituacionHospitalComponent implements OnInit {
  
  @Input()
  public DatoUsuario: DatoUsuario;

  

  sitHospForm: FormGroup;
  mensaje: string = "";
  isDivVisible = false;
  idHospital: number | string; 

  constructor( private formBuilder: FormBuilder ) { 
    
  }

  ngOnInit() {
    this.sitHospForm = this.formBuilder.group({               
        
        camasTotales: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{1,9}$")]],
        camasOcupadas: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{1,9}$")]],            
        camasDisponibles: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{1,9}$")]],
        pacientesDerivados: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{1,9}$")]],
        medicos: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{1,9}$")]],
        kinesiologos: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{1,9}$")]],
        tens: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{1,9}$")]],
        enfermeria: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{1,9}$")]],
        hospital: ['']     
    });
    this.sitHospForm.get('hospital').patchValue(this.DatoUsuario._idHospital);
  }
  
  get camasTotales() { return this.sitHospForm.get('camasTotales'); }
  get camasOcupadas() { return this.sitHospForm.get('camasOcupadas'); }
  get camasDisponibles() { return this.sitHospForm.get('camasDisponibles'); }  
  get pacientesDerivados() { return this.sitHospForm.get('pacientesDerivados'); }
  get medicos() { return this.sitHospForm.get('medicos'); }
  get kinesiologos() { return this.sitHospForm.get('kinesiologos'); }
  get tens() { return this.sitHospForm.get('tens'); }
  get enfermeria() { return this.sitHospForm.get('enfermeria'); }
  get hospital() { return this.sitHospForm.get('hospital'); }

  onSubmit() {
    this.mensaje="formulario completo";
    this.isDivVisible=true;
  }

  onReset() {
      this.isDivVisible=false;
      this.sitHospForm.reset();
  }
  

}
