'use strict';

import {Injectable} from 'angular2/core';
import {HEROES} from './mock-hero';

export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }
  
  getHeroesForWait(wait){
    return new Promise(resolve => {
      setTimeout(()=>{
        resolve(HEROES);
      }, wait);
    });
  }
}
