import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(
      1,
      "Kalia",
      "When you reach the end of your hope,tie a knot in it hang on",
      "",

      new Date(2018, 12, 31)
    ),
    new Quote(
      2,
      "Mugabo",
      "there is nothing permanent excpt change",
      "",

      new Date(2018, 11, 15)
    ),
    new Quote(
      3,
      "Mutwe",
      "life what happens when you are busy making other plans",
      "",

      new Date(2018, 10, 2)
    )
  ];
  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}`
      );
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}
}
