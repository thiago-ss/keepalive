import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
    private router: Router
  ) {}

  ngOnInit(): void {
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
      this.isError = true;
      return;
    }

    this.authService.login(this.email, this.password);
    
    this.email = '';
    this.password = '';
  }
}
