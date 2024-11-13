import { pokeApi } from '../../config/api/pokeApi';
import { Pokemon } from '../../domain/entities/pokemon';
import { PokeAPIPokemon, PokemonCharacteristicResponse } from '../../infrastructure/interfaces/pokepi.interfaces';
import { PokemonMapper } from '../../infrastructure/mappers/pokemon.mapper';

export const getPokemonById = async ( id: number, characteristics = true ): Promise<Pokemon> => {
  // max pokemon id with cacrcter is 30
  // Todo: fix this limitation of id 30 making search don't work
  if ( characteristics && id < 30 ) {
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
  } else {
    try {

      const { data } = await pokeApi.get<PokeAPIPokemon>( `/pokemon/${ id }` );

      const pokemon = await PokemonMapper.pokeApiPokemonToEntity( data );

      return pokemon;



    } catch ( error ) {
      throw new Error( `Error getting pokemon by id: ${ id }` );
    }
  }

};
