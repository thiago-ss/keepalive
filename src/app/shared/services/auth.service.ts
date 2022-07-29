import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.isLoggedIn = true;
      this.router.navigate(['/home'])
    }, err => {
      alert(err.message);
      this.isLoggedIn = false;
      this.router.navigate(['/login'])
    });
  }

  register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Registration successful');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    });
  }

  logout() {
    this.fireAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this.isLoggedIn = false;
      this.router.navigate(['/login'])
    }, err => {
      alert(err.message);
    });
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
