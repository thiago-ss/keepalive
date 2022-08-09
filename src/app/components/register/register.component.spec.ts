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

  describe('validate method', () => {
    it('should make the expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      component.validate();
      expect(routerStub.navigate).toHaveBeenCalled();
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
