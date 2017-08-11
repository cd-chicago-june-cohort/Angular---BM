import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Dojo Mail';
  emails = [
    {email: "baldmike@email.com", importance: true, subject: "You're great", content: "Believe me, you're the best"},
    {email: "debbieharry@email.com", importance: true, subject: "Call me", content: "Anytime, you can call me any anytime"},
    {email: "oscarthegrouch@email.com", importance: false, subject: "Garbage Cans", content: "Please fix the hinge for me"},
    {email: "jerrygarcia@email.com", importance: true, subject: "Franklin's Tower", content: "Roll away the dew"}
  ]
}
