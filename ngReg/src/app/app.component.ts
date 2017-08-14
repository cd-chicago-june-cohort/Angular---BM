import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Global '

  submit = false

  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    unit: '',
    city: '',
    state: ''
  }

  onSubmit() {
    this.submit = true
  }

}

