import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lat: number = 0;
  lon: number = 0;
  weatherData: any;
  actualDateTime: number = Date.now();
  data: number = 60;

  constructor(
    private authService: AuthService, 
    private weatherService: WeatherService, 
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getUserLocation();
    // let updateCountdown = (() => {
    //   if(this.data <= 0) {
    //     this.authService.logout();
    //     this.router.navigate(['/login']);
    //   } else {
    //     this.data--;
    //   }
    // }) 
    // setInterval(updateCountdown, 1000);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getUserLocation() {
    if("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;
        console.log(this.weatherService.getWeatherData(success.coords.latitude, success.coords.longitude))

        this.weatherService.getWeatherData(this.lat, this.lon).subscribe(data => {
          this.weatherData = data;
        })
      })
    }
  }
}
