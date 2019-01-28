import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'When you reach the end of your hope,tie a knot in it hang on','Find an online  '),
    new Quote(2,'there is nothing permanent excpt change','it is true'),
    new Quote(3, 'life what happens when you are busy making other plans','check internet'),
  

]
completeQuote(isComplete,index){
  if (isComplete){
      this.quotes.splice(index,1);

  

  }
 }
}
