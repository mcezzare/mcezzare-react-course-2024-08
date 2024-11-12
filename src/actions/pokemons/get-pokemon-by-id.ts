import { pokeApi } from '../../config/api/pokeApi';
import { Pokemon } from '../../domain/entities/pokemon';
import { PokeAPIPokemon, PokemonCharacteristicResponse } from '../../infrastructure/interfaces/pokepi.interfaces';
import { PokemonMapper } from '../../infrastructure/mappers/pokemon.mapper';

export const getPokemonById = async ( id: number ): Promise<Pokemon> => {
  try {
    console.log( `request http: ${ id }` );

    const [ pokemonData, characteristicsData ] = await Promise.all( [
      pokeApi.get<PokeAPIPokemon>( `/pokemon/${ id }` ),
      pokeApi.get<PokemonCharacteristicResponse>( `/characteristic/${ id }` )
    ] );


    // console.log( "Characteristics Data:", characteristicsData.data );


    const pokemon = await PokemonMapper.pokeApiPokemonToEntity( pokemonData.data );


    const englishDescription = characteristicsData.data.descriptions.find(
      ( desc ) => desc.language.name === "en"
    )?.description;


    pokemon.description = englishDescription || 'no description';

    // console.log( pokemon );
    return pokemon;
  } catch ( error ) {
    console.log( error );
    throw new Error( `Error getting pokemon by id: ${ id }` );
  }
};
