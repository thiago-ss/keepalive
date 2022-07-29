import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  canActivate() {
    this.fireAuth.authState.subscribe(response => {
      if((localStorage.getItem('token') == null) && (response?.uid == null)){
        this.router.navigate(['/login'])
      }
    });
   return true;
  }
}