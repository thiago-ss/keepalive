import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    const routerStub = () => ({ navigate: (array: any) => ({}) });
    const authServiceStub = () => ({ register: (email: any, password: any) => ({}) });
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RegisterComponent],
      providers: [
        { provide: Router, useFactory: routerStub },
        { provide: AuthService, useFactory: authServiceStub }
      ]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should load the component instance', () => {
    expect(component).toBeTruthy();
  });

  it(`isError should has the default value`, () => {
    expect(component.isError).toEqual(false);
  });

  it(`isEmailError should has the default value`, () => {
    expect(component.isEmailError).toEqual(false);
  });

  it(`isPasswordError should has the default value`, () => {
    expect(component.isPasswordError).toEqual(false);
  });

  it(`isConfirmPasswordError should has the default value`, () => {
    expect(component.isConfirmPasswordError).toEqual(false);
  });

  describe('errorHandler', () => {
    it('should set isEmailError to false', () => {
      const form = component.registerForm;
      form.setValue({
        "email": "thiago2508ss@gmail.com",
        "password": "senha",
        "confirmPassword": "senha"
      })
      component.errorHandler();
      expect(component.isEmailError).toBe(false);
    });

    it('should set isPasswordError to false', () => {
      const form = component.registerForm;
      form.setValue({
        "email": "emailinvalido",
        "password": "Senha123!",
        "confirmPassword": "senha"
      })
      component.errorHandler();
      expect(component.isPasswordError).toBe(false);
    });

    it('should set isConfirmPasswordError to false', () => {
      const form = component.registerForm;
      form.setValue({
        "email": "emailinvalido",
        "password": "Senha123!",
        "confirmPassword": "Senha123!"
      })
      component.errorHandler();
      expect(component.isPasswordError).toBe(false);
    });

    it('should set isEmailError to true', () => {
      const form = component.registerForm;
      form.setValue({
        "email": "emailinvalido",
        "password": "Senha123!",
        "confirmPassword": "Senha123!"
      })
      component.errorHandler();
      expect(component.isEmailError).toBe(true);
    });

    it('should set isPasswordError to true', () => {
      const form = component.registerForm;
      form.setValue({
        "email": "thiago2508ss@gmail.com",
        "password": "senha",
        "confirmPassword": "Senha123!"
      })
      component.errorHandler();
      expect(component.isPasswordError).toBe(true);
    });

    it('should set isConfirmPasswordError to true', () => {
      const form = component.registerForm;
      form.setValue({
        "email": "thiago2508ss@gmail.com",
        "password": "Senha123!",
        "confirmPassword": "senha"
      })
      component.errorHandler();
      expect(component.isConfirmPasswordError).toBe(true);
    });
  });

  describe('validate', () => {
    // it('should confirm password', () => {
    //   const form = component.registerForm;
    //   form.setValue({
    //     "email": "teste@testee.com",
    //     "password": "Teste123!",
    //     "confirmPassword": "Teste123!"
    //   });
    //   component.validate();
    //   expect(component.password).toEqual(component.confirmPassword);
    // });

    it('should validate email', () => {
      const form = component.registerForm;
      form.setValue({
        "email": "teste@testee.com",
        "password": "teste",
        "confirmPassword": "Tte"
      });
      component.validate();
      expect(component.validEmail).toBe(true);
    });

    it('should validate password', () => {
      const form = component.registerForm;
      form.setValue({
        "email": "emailinvalido",
        "password": "Teste1!",
        "confirmPassword": "Teste1!"
      });
      component.validate();
      expect(component.validPassword).toBe(true);
    });

    it('should navigate to login', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const form = component.registerForm;
      form.setValue({
        "email": "teste@teste.com",
        "password": "Teste1!",
        "confirmPassword": "Teste1!"
      });
      spyOn(routerStub, 'navigate').and.callThrough();
      component.validate();
      expect(routerStub.navigate).toHaveBeenCalled();
    })
  });

  describe('haveLowercase', () => {
    it('should have a lowercase letter in the string', () => {
      let str = 'aA';
      expect(component.haveLowercase(str)).toBe(true);
    });
  });

  describe('haveUppercase', () => {
    it('should have a uppercase letter in the string', () => {
      let str = 'aA';
      expect(component.haveUppercase(str)).toBe(true);
    });
  });

  describe('haveNumber', () => {
    it('should have a number in the string', () => {
      let str = 'aA1';
      expect(component.haveNumber(str)).toBe(true);
    });
  });

  describe('haveSymbols', () => {
    it('should have a symbol in the string', () => {
      let str = 'aA!';
      expect(component.haveSymbols(str)).toBe(true);
    });
  });

  describe('register method', () => {
    it('should make the expected calls', () => {
      const authServiceStub: AuthService = fixture.debugElement.injector.get(
        AuthService
      );
      spyOn(authServiceStub, 'register').and.callThrough();
      component.register();
      expect(authServiceStub.register).toHaveBeenCalledTimes(1);
    });
  });
});
