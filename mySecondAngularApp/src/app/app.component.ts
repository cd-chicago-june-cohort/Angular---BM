import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Welcome to Funky Town';
    user = { email:''};

    onsubmit() {
      console.log("onSubmit");
    }



}
