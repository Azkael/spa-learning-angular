import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  heroes: any[] = [];
  text: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this.text = params['text'];
      this.heroes = this._heroesService.searchHero(params['text'])
    })
  }

  seeHero(idx: number){
    this._router.navigate( ['/hero', idx] )
  }

}
