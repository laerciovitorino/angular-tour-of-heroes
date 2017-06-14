import { Injectable } from '@angular/core';

import { Hero } from '../hero/hero';
import { HEROES } from '../shared/mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 seconds delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}
