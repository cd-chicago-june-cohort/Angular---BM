import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = "Things People Say"

  quotes = [
    {'quote': "Something there is that doesn't love a wall", "author": 'Robert Frost', 'loves': 13},
    {'quote': "I slit the sheet (the sheet, I slit) and on the slitted sheet I sit", "author": "Duncan Dznuts", 'loves': 19}
  ]

  quote = {
    'quote': '',
    'author': '',
    'loves': 0
  }

  increaseLove(index) {
    this.quotes[index].loves ++
  }

  decreaseLove(index) {
    if (this.quotes[index].loves > -0) {
      this.quotes[index].loves --
    }
  }

  delete(index) {
    this.quotes.splice(index, 1)
  }

  onSubmit() {
    this.quotes.push(this.quote);
    this.quote = {
      'quote': '',
      'author': '',
      'loves': 0
    }
  }
  
}