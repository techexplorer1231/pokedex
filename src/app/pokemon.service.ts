import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PokemonList } from './pokemon-list';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PokemonService {
  constructor(private http: Http) { }

  getPokemons(): Observable<PokemonList[]> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/')
      .map((response: Response) => response.json());
  }
}
