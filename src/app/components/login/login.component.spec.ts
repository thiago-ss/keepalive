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

  it('should load the component instance', () => {
    expect(component).toBeTruthy();
  });

  it(`isMoved should has the default value`, () => {
    expect(component.isMoved).toEqual(false);
  });

  it(`isEmailError should has the default value`, () => {
    expect(component.isEmailError).toEqual(false);
  });

  it(`isPasswordError should has the default value`, () => {
    expect(component.isPasswordError).toEqual(false);
  });

  it(`isLoggedIn should has the default value`, () => {
    expect(component.isLoggedIn).toEqual(true);
  });

  describe('validate method', () => {
    it('should make the expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      component.validate();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });

  describe('login method', () => {
    it('should make the expected calls', () => {
      const authServiceStub: AuthService = fixture.debugElement.injector.get(
        AuthService
      );
      spyOn(authServiceStub, 'login').and.callThrough();
      component.login();
      expect(authServiceStub.login).toHaveBeenCalled();
    });
  });
});
