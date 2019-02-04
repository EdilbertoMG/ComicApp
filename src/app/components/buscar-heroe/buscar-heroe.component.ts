import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html'
})
export class BuscarHeroeComponent implements OnInit {
  
  heroe:any[] = []; 
  termino:string;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService) {
               }

  ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroe = this._heroesService.buscarHeroes(params['termino'])
      });
  }

}
