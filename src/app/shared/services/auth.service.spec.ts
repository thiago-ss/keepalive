import { fakeAsync, TestBed, tick } from '@angular/core/testing';
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

  it('should load the service instance', () => {
    expect(service).toBeTruthy();
  });

  describe('logout method', () => {
    it('should make the expected calls', fakeAsync(() => {
      const angularFireAuthStub: AngularFireAuth = TestBed.inject(
        AngularFireAuth
      );
      const routerStub: Router = TestBed.inject(Router);

      spyOn(angularFireAuthStub, 'signOut').and.callThrough()
      tick();
      localStorage.removeItem('token');
      spyOn(routerStub, 'navigate').and.callThrough();

      service.logout();

      expect(angularFireAuthStub.signOut).toHaveBeenCalled();
    }));
  });
});
