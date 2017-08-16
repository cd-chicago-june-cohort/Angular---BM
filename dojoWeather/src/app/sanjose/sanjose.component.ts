import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})

export class SanjoseComponent implements OnInit {

  sanjose = []

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this._weatherService
    .getWeather('San Jose')
    .then(weather => this.sanjose = weather)
    .catch(err => console.log(err))
  }
}
