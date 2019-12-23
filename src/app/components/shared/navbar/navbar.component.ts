import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _heroesService: HeroesService,
  ) { }

  ngOnInit() {
  }

  searchHero(text: string) {
    console.log(this._heroesService.searchHero(text))
  }

}
