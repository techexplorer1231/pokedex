interface Results {
  url: string;
  name: string;
}

export interface PokemonList {
  count: number;
  previous: string;
  results: Results[];
  next: string;
}
