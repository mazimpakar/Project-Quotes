import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote-form",
  templateUrl: "./quote-form.component.html",
  styleUrls: ["./quote-form.component.css"]
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote("", "", "", new Date());
  @Output() addQuote = new EventEmitter<Quote>();
  newQuoteName: string;
  newQuoteDescription: string;
  newQuoteAuthor: string;
  theQuote: any;

  submitQuote() {
    this.theQuote = new Quote(
      this.newQuoteName,
      this.newQuoteDescription,
      this.newQuoteAuthor,
      new Date()
    );
    this.newQuoteName = " ";
    this.newQuoteDescription = "";
    this.newQuoteAuthor = "";
    this.addQuote.emit(this.theQuote);
  }

  constructor() {}

  ngOnInit() {}
}
