import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    const angularFireAuthStub = () => ({
      signInWithEmailAndPassword: (email: any, password: any) => ({ then: () => ({}) }),
      createUserWithEmailAndPassword: (email: any, password: any) => ({
        then: () => ({})
      }),
      signOut: () => ({ then: () => ({}) })
    });
    const routerStub = () => ({ navigate: (array: any) => ({}) });
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: AngularFireAuth, useFactory: angularFireAuthStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('logout', () => {
    it('makes expected calls', () => {
      const angularFireAuthStub: AngularFireAuth = TestBed.inject(
        AngularFireAuth
      );
      const routerStub: Router = TestBed.inject(Router);
      spyOn(angularFireAuthStub, 'signOut').and.callThrough();
      spyOn(routerStub, 'navigate').and.callThrough();
      service.logout();
      expect(angularFireAuthStub.signOut).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
