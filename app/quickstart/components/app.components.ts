'use strict';

import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>My frist Angular 2 app</h1>
    firstName: <input [(ngModel)]="firstName" />
    <button (click)="setFirstName()">setFirstName value</button>
    firstName-text: {{firstName}}
  `
})
export class AppComponent implements OnInit{
  public firstName: string;
  
  ngOnInit() {
    this.firstName = 'init first name';
  }
  
  setFirstName(){
    this.firstName = 'Abc123123';
  }
  
}