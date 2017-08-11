import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';

  colors = [
    'blue', 'red', 'green', 'yellow', 'aqua', 'chartreuse', 'crimson', 'darkseagreen'
    ];
    
  random = [
    Math.floor(Math.random()*8),
    Math.floor(Math.random()*8),
    Math.floor(Math.random()*8),
    Math.floor(Math.random()*8),
    Math.floor(Math.random()*8),
    Math.floor(Math.random()*8),
    Math.floor(Math.random()*8),
    Math.floor(Math.random()*8)
    ];

  }
