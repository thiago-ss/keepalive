import { async, inject, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [WeatherService]
    });
    service = TestBed.inject(WeatherService);
  });

  let lat: number = 0;
  let lon: number = 0;

  let params = new HttpParams()
    .set('lat', lat)
    .set('lon', lon)
    .set('units', 'metric')
    .set('appid', environment.APPID)

  it(`should issue a request`,
    async(
      inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
        http.get(environment.apiUrl, { params }).subscribe();
        backend.expectOne({
          url: 'r',
          method: 'GET'
        });
      })
    )
  );
});
