import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})

export class DcComponent implements OnInit {

  dc = []

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this._weatherService
    .getWeather('washington dc')
    .then(weather => this.dc = weather)
    .catch(err => console.log(err))
  }
}
