import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   quotes:string[];
   constructor(){

    this.quotes = ["But man is not made for defaut.A man can be destroyed not defeated","When you reach the end of your rope,tie a knot in it and hang on","There is nothing perment except change","You cannot shake hands with a clenched fist"]
  }

 }
 

