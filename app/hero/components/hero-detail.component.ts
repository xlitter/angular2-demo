'use strict';

import {Hero} from './hero';
import {Component} from 'angular2/core';

@Component({
  selector: 'hero-detail',
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
       </div>
    </div>
  `,
  inputs: ['hero']

})
export class HeroDetailComponent {
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

  setHeroName(name) {
    this.hero.name = name;
  }

  resetHero() {
    this.hero = {
      id: 2,
      name: 'abc-detail'
    };
  }
}