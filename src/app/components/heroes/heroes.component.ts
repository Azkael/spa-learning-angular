import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private _heroesService: HeroesService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  seeHero(idx: number){
    this._router.navigate( ['/hero', idx] )
  }

}
