import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-card-hero",
  templateUrl: "./card-hero.component.html",
  styleUrls: ["./card-hero.component.scss"]
})
export class CardHeroComponent implements OnInit {
  @Input() hero: any = {};
  @Input() index: number;

  @Output() selectedHero: EventEmitter<number>;

  constructor(private _router: Router) {
    this.selectedHero = new EventEmitter();
  }

  ngOnInit() {}

  seeHero() {
    this._router.navigate( ['/hero', this.index] )
    // this.selectedHero.emit( this.index )
  }
}