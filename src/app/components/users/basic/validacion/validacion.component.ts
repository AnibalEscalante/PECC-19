import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.component.html',
  styleUrls: ['./validacion.component.less']
})
export class ValidacionComponent implements OnInit {

  rutForm: FormGroup;
  mensaje: string = "";
  isDivVisible = false;
  
  constructor( private formBuilder: FormBuilder ) {
  
  }

  ngOnInit(): void {
    this.rutForm = this.formBuilder.group({              
      rut: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{7,8}$")]]  
  });
  }
  get rut() { return this.rutForm.get('rut'); }

  onSubmit()
  {
    this.mensaje = "validacion exitosa";
    this.isDivVisible = true;   
  }

}
