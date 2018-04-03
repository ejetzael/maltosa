import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { HeroesService } from "../../servicios/heroes.service";

@Component({
  selector: 'app-sujeto',
  templateUrl: './sujeto.component.html',
  styles: []
})
export class SujetoComponent implements OnInit {

  sujeto:any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService ) {

    this.activatedRoute.params.subscribe( params => {
      console.log( params['id'] );
      this.sujeto = this._heroesService.getSujeto( params['id'] );
    });
  }

  ngOnInit() {
  }

}
