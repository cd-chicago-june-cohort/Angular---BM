import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-comp',
  templateUrl: './quote-comp.component.html',
  styleUrls: ['./quote-comp.component.css']
})
export class QuoteCompComponent implements OnInit {

  @Input() quote: string;
  @Input() author: string;
  @Input() loves: number;
  @Input() index: number;

  @Output() voteUp = new EventEmitter();
  @Output() voteDown = new EventEmitter();
  @Output() deleteQuote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  up(event, index) {
    this.voteUp.emit(index);
  }

  down(event, index) {
    this.voteDown.emit(index);
  }

  delete(event, index) {
    this.deleteQuote.emit(index);
  }

}
