import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  dojo = ""
  weather = []

  constructor(private _weatherService: WeatherService) { }
  grabWeather() {
    this._weatherService
    .getWeather(this.dojo)
    .then(data => this.weather = data)
    .catch(err=>console.log(err));
  }

  cities = [
    "Chicago", "Seattle", "SanJose", "Burbank", "Dallas", "Washington, DC" 
  ]
  
  cityRoutes = [
    "chicago", "seattle", "sanjose", "burbank", "dallas", "dc"  
  ]
}
