'use strict';

import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'hero-detail',
  //自组件可以使用父组件注入的service,
  //如果子组件通过providers提供了同样的Service, 则会生成一个新的service实例,一般子组件不用提供父组件已有的service
  //providers: [HeroService],
  template: `
    <div *ngIf="hero">
       <h2>{{hero.name}} details!</h2>
       <div><label>id:</label>{{hero.id}}</div>
       <div>
          <label>name:</label>
          <div><input [(ngModel)]="hero.name" placeholder="name"/></div>
       </div>
       <div>
          <button (click)="setHeroName('detailName')">set name</button>
          <button (click)="resetHero()">reset</button>
          <button (click)="parentHeroesIsEqualsHeros()">equal</button>
       </div>
    </div>
  `,
  inputs: ['hero', 'parentHeroService']

})
export class HeroDetailComponent implements OnInit {
  /**
   * 
   * 如果inputs中有hero, 而class中未定义,则会默认生成一个hero,也可通过this.hero引用到此hero,
   * 如果定义了则此hero指向inputs中的hero,
   * 而inputs中hero又与赋值的对象指向同一地址,
   * 所以修改此hero中属性的值,等同于修改父组件中对象的属性的值;
   * 而如果重新给此hero赋值,则hero指向新地址,与父组件断开连接;
   * 
   */
  public hero: Hero;
  
  public parentHeroService: HeroService;
  
  public heroes: Hero[];

  constructor(private _heroService: HeroService) {

  }

  ngOnInit() {
    this._heroService.getHeroes().then(data=> {
      this.heroes = data;
    });
  }

  setHeroName(name) {
    this.hero.name = name;
  }

  resetHero() {
    this.hero = {
      id: 2,
      name: 'abc-detail'
    };
  }

  parentHeroesIsEqualsHeros() {
    //如果子组件提供了providers,则其与父级的service是不一致的
    const result = this._heroService === this.parentHeroService;
    console.log('parentService', this.parentHeroService);
    console.log('parentHeroesIsEqualsHeros', result);
  }
}