import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  lat: number = 0;
  lon: number = 0;
  weatherData: any;
  actualDateTime: number = Date.now();
  time: number = 10;
  countdown: any;

  constructor(
    private authService: AuthService,
    private weatherService: WeatherService,
    private router: Router,
  ) { }

  ngOnDestroy(): void {
    clearInterval(this.countdown);
  }

  ngOnInit(): void {
    this.getUserLocation();
    this.countdown = this.refresh(this.time);
  }

  refresh(time: number) {
    this.countdown = setInterval(() => {
      if(time <= 0) {
        this.authService.logout();
        this.router.navigate(['/login']);
      } else {
        time--;
        this.time--;
      }
    }, 1000)
  }

  logout() {
    this.authService.logout();
  }

  getUserLocation() {
    this.weatherService.getWeatherData( -23.5489, -46.6388).
    subscribe((weather) => {
     this.weatherData = weather;
    });
    this.getUserPosition();
  }

  getUserPosition() {
    if("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherService.getWeatherData(this.lat, this.lon).subscribe(data => {
          this.weatherData = data;
        })
      })
    }
  }
}
