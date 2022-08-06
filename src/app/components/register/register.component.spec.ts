import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    const routerStub = () => ({ navigate: (array: any) => ({}) });
    const authServiceStub = () => ({ register: (email: any, password: any) => ({}) });
    TestBed.configureTestingModule({
      imports: [FormsModule],
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

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`isError has default value`, () => {
    expect(component.isError).toEqual(false);
  });

  it(`isEmailError has default value`, () => {
    expect(component.isEmailError).toEqual(false);
  });

  it(`isPasswordError has default value`, () => {
    expect(component.isPasswordError).toEqual(false);
  });

  it(`isConfirmPasswordError has default value`, () => {
    expect(component.isConfirmPasswordError).toEqual(false);
  });

  describe('validate', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      component.validate();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });

  describe('register', () => {
    it('makes expected calls', () => {
      const authServiceStub: AuthService = fixture.debugElement.injector.get(
        AuthService
      );
      spyOn(authServiceStub, 'register').and.callThrough();
      component.register();
      expect(authServiceStub.register).toHaveBeenCalled();
    });
  });
});
