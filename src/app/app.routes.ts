import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { SujetoComponent } from './components/sujeto/sujeto.component';
import { BuscaSujetoComponent } from './components/busca-sujeto/busca-sujeto.component';
import { PipesComponent } from './components/pipesp/pipes.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'sujeto/:id', component: SujetoComponent },
    { path: 'buscar/:termino', component: BuscaSujetoComponent },
    { path: 'pipes', component: PipesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);