import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { WeatherService } from './weather.service';

function createResponse(body: any) {
  return Observable.create((observer: Observer<any>) => {
      observer.next(body);
  });
}
describe('WeatherService', () => {
    let service: WeatherService;
    let http: HttpClient;

    beforeEach(() => {
      const bed = TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          { provide: HttpClient, useClass: MockHttp },
          WeatherService
        ]
      });
      http = bed.get(HttpClient);
      service = bed.get(WeatherService);
    });


  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it('Deve retornar clima', () => {
    service.getWeatherData(123,2323).subscribe((result) => {
      expect(result).toEqual({ wheater: 'mock'});
    });
  })
class MockHttp {
  get() {
    return createResponse({ wheater: 'mock'});
  }
}
});
