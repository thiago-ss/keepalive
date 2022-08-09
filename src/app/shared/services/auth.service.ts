import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'any'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    let error: any;

    this.fireAuth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/home'])
    }, err => {
      alert(err.message);
      error = true;
      this.router.navigate(['/login'])
    });

    if(error)
      return error;
  }

  register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Registration successful');
      this.router.navigate(['/home']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    });
  }

  logout() {
    this.fireAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login'])
    }, err => {
      alert(err.message);
    });
  }
}
