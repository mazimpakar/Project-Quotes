import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote-details",
  templateUrl: "./quote-details.component.html",
  styleUrls: ["./quote-details.component.css"]
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  votes: number;
  vote = 0;

  constructor() {
    this.votes = 0;
  }

  likeVote(): boolean {
    this.votes += 1;
    return false;
  }

  dislikeVote(): boolean {
    this.votes -= 1;
    return false;
  }
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  ngOnInit() {}
}
