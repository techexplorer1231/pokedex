import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PokemonService } from '../pokemon.service';
import { PokemonList } from '../pokemon-list';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: Observable<PokemonList[]>;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemons = this.pokemonService.getPokemons();
  }

}
