import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('warning', [
      state('normal', style({
        borderColor: '#FFF'
      })),
      state('yellow', style({
        borderColor: '#E9B425'
      })),
      transition('normal <=> yellow', [
        animate('0.5s')
      ])
    ])
  ]
})
export class RegisterComponent {

  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  isError: boolean = false;
  isEmailError: boolean = false;
  isPasswordError: boolean = false;
  isConfirmPasswordError: boolean = false;

  validEmail: any;
  validPassword: any;

  registerForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern("^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$")
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.pattern("^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$")
    ])
  })

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  errorHandler() {
    if(this.registerForm.controls['email'].errors) {
      this.isEmailError = true;
    } else {
      this.isEmailError = false;
    }

    if(this.registerForm.controls['password'].errors) {
      this.isPasswordError = true;
    } else {
      this.isPasswordError = false;
    }

    if(this.registerForm.controls['confirmPassword'].errors) {
      this.isConfirmPasswordError = true;
    } else {
      this.isConfirmPasswordError = false;
    }
  }

  validate() {
    this.validEmail = this.registerForm.controls['email'].errors?.['pattern'] && this.registerForm.controls['email'].errors?.['required'];
    this.validPassword = this.registerForm.controls['password'].errors?.['pattern'] &&
    this.registerForm.controls['password'].errors?.['required'] &&
    this.registerForm.controls['confirmPassword'] == this.registerForm.controls['password']
  }

  haveLowercase(param: string) {
    let regEx = /[a-z]/;
    return regEx.test(param);
  }

  haveUppercase(param: string) {
    let regEx = /[A-Z]/;
    return regEx.test(param);
  }

  haveNumber(param: string) {
    let regEx = /[0-9]/;
    return regEx.test(param);
  }

  haveSymbols(param: string) {
    let regEx = /[$&+,:;=?@#|'<>.^*()%!-]/;
    return regEx.test(param);
  }

  register() {
    if(!this.registerForm.valid && !this.registerForm.dirty) {
      this.isError = true;
    }

    this.authService.register(this.email, this.password);

    this.email = '';
    this.password = '';

  }

  get Email() {
    return this.registerForm.get('email')
  }

  get Password() {
    return this.registerForm.get('password')
  }

  get ConfirmPassword() {
    return this.registerForm.get('confirmPassword')
  }

}
