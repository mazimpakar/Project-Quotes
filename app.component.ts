import { Component } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


 
 export class AppComponent {
  goals = [
      new Quote(1,'But man is not made for defaut.A man can be destroyed not defeated'),
      new Quote(2,'There is nothing perment except change'),
      new Quote(3, 'You cannot shake hands with a clenched fist'),
      new Quote(4, 'You cannot shake hands with a clenched fist'),
      
}

 

