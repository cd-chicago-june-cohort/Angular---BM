import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "U.S. Time Zones";

  date = new Date();

  selected = '';

  hide = false;

  timeZone(zone) {
    this.date = new Date();
    this.hide = false;
    if (zone === 'PST') {
      this.date.setHours(this.date.getHours() - 2);
      this.selected = 'PST';
    } else if (zone === 'MST') {
      this.date.setHours(this.date.getHours() - 1);
      this.selected = 'MST';
    } else if (zone === 'CST') {
      this.date.setHours(this.date.getHours());
      this.selected = 'CST';
    } else if (zone === 'EST') {
      this.date.setHours(this.date.getHours() + 1);
      this.selected = 'EST';
    }
  };

  reset() {
    this.selected = '';
    this.hide = true;
  }


}