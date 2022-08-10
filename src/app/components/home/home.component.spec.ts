import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { Router } from '@angular/router';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    const authServiceStub = () => ({ logout: () => ({}) });
    const weatherServiceStub = () => ({
      getWeatherData: (arg: any, arg1: any) => ({ subscribe: (f: (arg0: {}) => any) => f({}) })
    });
    const routerStub = () => ({ navigate: (array: any) => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomeComponent],
      providers: [
        { provide: AuthService, useFactory: authServiceStub },
        { provide: WeatherService, useFactory: weatherServiceStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`lat has default value`, () => {
    expect(component.lat).toBe(0);
  });

  it(`lon has default value`, () => {
    expect(component.lon).toBe(0);
  });

  it(`time has default value`, () => {
    expect(component.time).toBe(60);
  });

  describe('refresh', () => {
    it('should start the timer to refresh the page when its over', async () => {
      component.refresh(60);
      expect(component.countdown).toBeTruthy();
    });
    expect(component.refresh).toHaveBeenCalled();
  });

  describe('ngOnInit', () => {
    it('should call #getUserLocation', () => {
      spyOn(component, 'getUserLocation').and.callThrough();
      component.ngOnInit();
      expect(component.getUserLocation).toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    it('should make the expected calls', () => {
      const authServiceStub: AuthService = fixture.debugElement.injector.get(
        AuthService
      );
      spyOn(authServiceStub, 'logout').and.callThrough();
      component.logout();
      expect(authServiceStub.logout).toHaveBeenCalled();
    });
  });

  describe('getUserLocation', () => {
    it('makes expected calls', () => {
      const weatherServiceStub: WeatherService = fixture.debugElement.injector.get(
        WeatherService
      );
      spyOn(weatherServiceStub, 'getWeatherData').and.callThrough();
      component.getUserLocation();
      expect(weatherServiceStub.getWeatherData).toHaveBeenCalled();
    });
  });
});
