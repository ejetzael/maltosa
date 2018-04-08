import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../servicios/heroes.service";

@Component({
  selector: 'app-busca-sujeto',
  templateUrl: './busca-sujeto.component.html'
})
export class BuscaSujetoComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService: HeroesService ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      console.log( params['termino']);
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      console.log( this.heroes );
    } );
  }

}
