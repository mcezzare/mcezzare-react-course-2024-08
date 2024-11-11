import { pokeApi } from '../../config/api/pokeApi';
import { Pokemon } from '../../domain/entities/pokemon';
import { PokeAPIPokemon } from '../../infrastructure/interfaces/pokepi.interfaces';
import { PokemonMapper } from '../../infrastructure/mappers/pokemon.mapper';


export const getPokemonById = async ( id: number ): Promise<Pokemon> => {

  try {
    console.log( `request http: ${ id }` );
    const { data } = await pokeApi.get<PokeAPIPokemon>( `/pokemon/${ id }` );

    const pokemon = await PokemonMapper.pokeApiPokemonToEntity( data );
    // console.log( { pokemon } );
    return pokemon;

  } catch ( error ) {
    console.log( error );
    throw new Error( `Error getting pokemon by id: ${ id }` );

  }
};