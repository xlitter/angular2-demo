'use strict';

import {Component} from 'angular2/core';

interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'hero',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="#hero of heroes"
      (click)="onSelect(hero)" 
      [class.selected]="hero === selectHero">
        <span>{{hero.id}}</span>{{hero.name}}
      </li>
    </ul>
    <h2>{{selectHero.name}} details!</h2>
    <div><label>id:</label>{{selectHero.id}}</div>
    <div>
      <label>name:</label>
      <div><input [(ngModel)]="selectHero.name" placeholder="name"/></div>
    </div>
   `,
  styles: [`     
    .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
    .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
    .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
    .heroes .badge {
      font-size: small;
      color: white;
      padding: 0.1em 0.7em;
      background-color: #369;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -1px;
    }
    .selected { background-color: #EEE; color: #369; }
  `]
})
export class AppComponent {

  public title = 'Tour of Heroes';

  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  public heroes: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
  ];

  public selectHero: Hero;

  onSelect(hero) {
    this.selectHero = hero;
  }


}