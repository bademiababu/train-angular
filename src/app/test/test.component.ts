import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>Welcome {{name}}</h2>
  <h2>{{2+2}}</h2>
  <h2 class = "text-success">{{"Hi is this will work!"+name.toUpperCase()}}</h2>
  <h2 [class] = "scuccessClass"> {{" From greetUser() "+ greetUser()}}</h2>
  <h2>{{siteUrl}}</h2>
  <input [id] = 'myId' type = 'text' value = 'babu'/>
  <input bind-disabled = "isDisabled" type = 'text' value = 'babu'/>
  <h2 [ngClass]= "messageClasses">babu111</h2>
  <h2 [style.color]= "'orange'">style binding</h2>
  <button (click)="onClick()">Greet</button>
  {{greeting}}
  <h1>Template Reference Variables</h1>
  <input #myInput type = "text"/>
  <button (click) = "logMessage(myInput.value)">Log</button>
  <h1>Twoway Binding</h1>
  
  `,
  styles: [`
  .text-success{
    color: green;
  }
  .text-danger{
    color: red;
  }
  .text-special{
    font-style: italic;
  }
  
  
  
  `]
})
export class TestComponent implements OnInit {

  public name = "Babu";
  public myId = 'testID'; 
  public isDisabled = true;
  public scuccessClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public greeting = "";
  

  public messageClasses ={

    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  }
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }
  greetUser(){
    return this.name;
  }
  onClick(){
    this.greeting = "welcome to angular.x";
    console.log("EventHandling!")
  }
  logMessage(value){
    console.log("Text box content is :"+value);
  }

}
