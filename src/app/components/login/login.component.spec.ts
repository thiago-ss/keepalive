import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    const routerStub = () => ({ navigate: (array: any) => ({}) });
    const authServiceStub = () => ({ login: (email: any, password: any) => ({}) });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LoginComponent],
      providers: [
        { provide: Router, useFactory: routerStub },
        { provide: AuthService, useFactory: authServiceStub }
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`isMoved has default value`, () => {
    expect(component.isMoved).toEqual(false);
  });

  it(`isEmailError has default value`, () => {
    expect(component.isEmailError).toEqual(false);
  });

  it(`isPasswordError has default value`, () => {
    expect(component.isPasswordError).toEqual(false);
  });

  it(`isLoggedIn has default value`, () => {
    expect(component.isLoggedIn).toEqual(true);
  });

  describe('validate', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      component.validate();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });

  describe('login', () => {
    it('makes expected calls', () => {
      const authServiceStub: AuthService = fixture.debugElement.injector.get(
        AuthService
      );
      spyOn(authServiceStub, 'login').and.callThrough();
      component.login();
      expect(authServiceStub.login).toHaveBeenCalled();
    });
  });
});
