import { pokeApi } from '../../config/api/pokeApi';
import { Pokemon } from '../../domain/entities/pokemon';

// export const sleep = async () => {
//   return new Promise( resolve => setTimeout( resolve, 2000 ) );
// };

export const getPokemons = async (): Promise<Pokemon[]> => {
  console.log( 'Getting Pokemons' );
  // await sleep();

  try {

    const url = '/pokemon';
    const { data, status, config } = await pokeApi.get( url );


    console.log( data, status, config );


    return [];
  } catch ( error ) {
    console.error( 'Error getting pokemons:', error );
    throw new Error( 'Error getting pokemons' );
  }
};
