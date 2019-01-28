import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'When you reach the end of your hope,tie a knot in it hang on','Find an online version and watch merlin find his son'),
    new Quote(2,'there is nothing permanent excpt change','Find an online version and watch merlin find his son'),
    new Quote(3, 'life what happens when you are busy making other plans','Find an online version and watch merlin find his son'),
  

]
oogleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
        

  constructor() { }

  ngOnInit() {
  }
}

