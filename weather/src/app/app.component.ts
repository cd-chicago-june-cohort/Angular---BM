import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather';

  cities = [
    "Chicago", "Seattle", "San Jose", "Burbank", "Dallas", "D.C." 
  ]

  cityRoutes = [
    "chicago", "seattle", "sanjose", "burbank", "dallas", "dc"  
  ]
}
