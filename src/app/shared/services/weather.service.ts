import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'any'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {}

  getWeatherData(lat: number, lon: number) {
    let params = new HttpParams()
    .set('lat', lat)
    .set('lon', lon)
    .set('units', 'metric')
    .set('appid', environment.APPID)

    return this.httpClient.get(environment.apiUrl, { params });
  }
}
