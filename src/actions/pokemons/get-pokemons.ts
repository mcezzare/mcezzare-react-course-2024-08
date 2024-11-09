import { pokeApi } from '../../config/api/pokeApi';
import type { Pokemon } from '../../domain/entities/pokemon';
import type { PokeAPIPaginatedResponse, PokeAPIPokemon } from '../../infrastructure/interfaces/pokeapi.interfaces';

export const getPokemons = async ( page: number, limit: number = 20 ): Promise<Pokemon[]> => {
  console.log( 'Getting Pokemons' );


  try {

    const url = `/pokemon?offset=${ page * 10 }&limit=${ limit }}`;
    // const url = '/pokemon';
    const { data } = await pokeApi.get<PokeAPIPaginatedResponse>( url );
    // console.log( `offset=${ page * 10 }&limit=${ limit }}` );

    // 20 em sequencia
    // const pokemonPromises = data.results.map( async ( info ) => {
    //   return await pokeApi.get( info.url );
    // } );

    // 20 em paralelo
    const pokemonPromises = data.results.map( ( info ) => {
      return pokeApi.get<PokeAPIPokemon>( info.url );
    } );

    const pokeApiPokemons = await Promise.all( pokemonPromises );


    console.log( data, pokeApiPokemons );


    return [];
  } catch ( error ) {
    console.error( 'Error getting pokemons:', error );
    throw new Error( 'Error getting pokemons' );
  }
};
