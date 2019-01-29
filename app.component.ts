import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  quotes = [
    // new Quote(1,'1',new Date(2005,2,2)),
    // new Quote(2,'there is nothing permanent excpt change'),
    // new Quote(3, 'life what happens when you are busy making other plans'),


  ]

}
