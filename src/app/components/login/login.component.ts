import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
export class LoginComponent {

  email: string = '';
  password: string = '';
  isMoved: boolean = false;
  isEmailError: boolean = false;
  isPasswordError: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  isLoggedIn = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  errorHandler() {
    if(this.loginForm.controls['email'].errors) {
      this.isEmailError = true;
    } else {
      this.isEmailError = false;
    }

    if(this.loginForm.controls['password'].errors) {
      this.isPasswordError = true;
    } else {
      this.isPasswordError = false;
    }
  }

  login() {
    if(this.loginForm.controls.email.errors) {
      this.isEmailError = true;
    } else {
      this.isEmailError = false;
    }

    if(this.loginForm.controls.password.errors) {
      this.isPasswordError = true;
    } else {
      this.isPasswordError = false;
    }

    this.isLoggedIn = this.authService.login(this.email, this.password);

    this.email = '';
    this.password = '';
  }
}
