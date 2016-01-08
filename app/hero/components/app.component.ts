'use strict';


import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';


@Component({
  selector: 'hero',
  directives: [HeroDetailComponent],
  providers: [HeroService],
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="#hero of heroes"
      (click)="onSelect(hero)" 
      [class.selected]="hero === selectHero">
        <span class="badge">{{hero.id}}</span>{{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectHero" [parentHeroService] ="heroService"></hero-detail>
   `,
  styles: [`     
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 10em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0em;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #EEE;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0em 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0px 0px 4px;
    }
  `]
})
export class AppComponent implements OnInit {

  public title = 'Tour of Heroes';

  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  public heroes: Hero[];

  public heroService: HeroService;
  
  public selectHero: Hero;

  //_heroService外层可以直接引用,与普通变量无异,只是告诉读代码的这是个私有变量
  constructor(private _heroService: HeroService) {
    this.heroService = _heroService;
  }

  ngOnInit() {
    this.getHeroes().then((data) => {
      this.heroes = data;
    });
  }

  onSelect(hero) {
    this.selectHero = hero;
  }

  getHeroes() {
    return this._heroService.getHeroes();
    // return this._heroService.getHeroesForWait(1500);
  }

}