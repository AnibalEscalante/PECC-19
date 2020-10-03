import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.less']
})
export class RegistroComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  mensaje: string = "";
  isDivVisible = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          
          nombre: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,32}')]],
          apellido: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,32}')]],            
          email: ['', [Validators.required, Validators.email]],
          celular: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{9}$")]],
          password: ['', [Validators.required, Validators.minLength(8)]],
          confirmPassword: ['', Validators.required],
          
      }, {
          validator: this.MustMatch('password', 'confirmPassword')
      });
  }

  get email() { return this.registerForm.get('email'); }
  get nombre() { return this.registerForm.get('nombre'); }
  get apellido() { return this.registerForm.get('apellido'); }  
  get celular() { return this.registerForm.get('celular'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }

  onSubmit() {
    this.mensaje="registro completo";
    this.isDivVisible=true;
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
  


  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
}
