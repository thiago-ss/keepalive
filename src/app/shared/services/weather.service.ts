import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {}

  getWeatherData(lat: number, lon: number): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}?lat=${lat}&lon=${lon}&lang=$pt_br&units=metric&APPID=${environment.APPID}`);
  }
}
