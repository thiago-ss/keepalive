import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  register() {
    if(this.email == '' || this.password == '') {
      alert('Ops, usuario ou senha invalidos. Tente novamente!');
      return;
    }

    this.authService.register(this.email, this.password);
    
    this.email = '';
    this.password = '';
  }

}
