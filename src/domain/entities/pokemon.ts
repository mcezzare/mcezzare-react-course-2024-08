

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  avatar: string;
  sprites: string[];


  color: string;

  games: string[];
  stats: Stat[];
  abilities: string[];
  moves: Move[];
  cries: Cries;
  description: string;
}


export interface Stat {
  name: string;
  value: number;
}

export interface Move {
  name: string;
  level: number;
}

export interface Cries {
  latest: string;
  legacy: string;
}


