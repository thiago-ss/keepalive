import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('moveIcon', [
      state('moveIn', style({
        right: 140
      })),
      state('moveOut', style({
        right: 85
      })),
      transition('moveOut <=> moveIn', [
        animate('0.5s')
      ])
    ]),
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
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  isMoved: boolean = false;
  isError: boolean = false;
  validEmail: any;
  validPassword: any;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  moveIcons() {
    if(this.loginForm.controls['email'].value || this.loginForm.controls['password'].value) {
      this.isMoved = true;
    } else {
      this.isMoved = false;
    }
  }

  errorHandler() {
    if(this.loginForm.controls['email'].errors || this.loginForm.controls['password'].errors) {
      this.isError = true;
    } else {
      this.isError = false;
    }
  }

  validate() {
    this.validEmail = this.loginForm.controls['email'].errors;
    this.validPassword = this.loginForm.controls['password'].errors;
    if(!this.validEmail && !this.validPassword) {
      this.router.navigate(['/home'])
    }
  }

  login() {
    if(this.email == '' || this.password == '') {
      alert('erro')
      return;
    }

    this.authService.login(this.email, this.password);
    
    this.email = '';
    this.password = '';
  }
}
