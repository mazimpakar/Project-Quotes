

import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
        new Quote(1,'When you reach the end of your hope,tie a knot in it hang on','Find an online', new Date(2018,12,31)),
        new Quote(2,'there is nothing permanent excpt change','it is true', new Date (2018,11,15)),
        new Quote(3, 'life what happens when you are busy making other plans','check internet' , new Date(2018,10,2)),
      
    
    ]
    deleteQuote(isComplete,index){
      if (isComplete){
          let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
          
          if(toDelete){
              this.quotes.splice(index,1)

  // @Input() quote:Quote;
  // @Output() isComplete= new EventEmitter<boolean>();

          
  // constructor() { }
          }
        }
      }
ngOnInit(){

} 
  }




      