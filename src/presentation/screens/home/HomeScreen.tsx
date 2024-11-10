/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import { FlatList, StyleSheet, View } from 'react-native';
import { getPokemons } from '../../../actions/pokemons';
import { useQuery } from '@tanstack/react-query';
import { PokeballBg } from '../../components/ui/PokeballBg';
import { Text } from 'react-native-paper';
import { globalTheme } from '../../../config/theme/global-theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../../components/pokemon/PokemonCard';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, data: pokemons = [] } = useQuery( {
    queryKey: [ 'pokemons' ], // cache key
    queryFn: () => getPokemons( 0 ),
    staleTime: 1000 * 60 * 60, // 60 minutes

  } );
  console.log( pokemons );

  return (
    <View style={ globalTheme.globalMargin }>
      <PokeballBg style={ styles.imgPosition } />
      {/* { pokemons.map( ( pokemon, index ) => (
        <Text style={ {
          backgroundColor: 'black', marginTop: 20, color: 'white'
        } } variant="displayMedium" key={ index }>{ pokemon.name }</Text>
      ) )
      } */}
      <FlatList
        data={ pokemons }
        keyExtractor={ ( pokemon, index ) => `${ pokemon.id }-${ index }` }
        numColumns={ 2 }
        style={ { marginTop: top + 20 } }
        ListHeaderComponent={ () => (
          <Text variant="displayMedium">Pokedex</Text>
        ) }
        renderItem={ ( { item: pokemon } ) => (
          <Text>{ pokemon.name }</Text>
          // <PokemonCard pokemon={ pokemon } />
        ) }
      />
      {/* { pokemons.map( ( pokemon, index ) => (
        <Text style={ {
          backgroundColor: 'black', marginTop: 20, color: 'white'
        } } variant="displayMedium" key={ index }>{ pokemon.name }</Text>
      ) )
      } */}
    </View>
  );
};

const styles = StyleSheet.create( {
  imgPosition: {
    position: 'absolute',
    top: -100,
    right: -100,
  },
} );
