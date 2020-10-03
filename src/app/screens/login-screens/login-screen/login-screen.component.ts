import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.less']
})
export class LoginScreenComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje: string = "";
  isDivVisible = false;

  constructor(private router: Router) { 
    this.checkoutForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  /* pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$") */

  createFormGroup() {
    return new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])
    });
  }



  SesionIniciada(){
    this.router.navigate(['./']);
  }

  onSubmit(){
    this.mensaje="sesion iniciada";
    this.isDivVisible=true;
  }

  get usuario() { return this.checkoutForm.get('usuario'); }
  get password() { return this.checkoutForm.get('password'); }

}
