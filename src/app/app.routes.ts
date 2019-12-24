import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearcherComponent } from "./components/searcher/searcher.component";

const APP_ROUTES: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'about', component: AboutComponent },
   { path: 'heroes', component: HeroesComponent },
   { path: 'hero/:id', component: HeroComponent },
   { path: 'search/:text', component: SearcherComponent },
   { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);