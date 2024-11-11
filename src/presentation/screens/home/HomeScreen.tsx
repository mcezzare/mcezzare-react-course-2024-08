/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { getPokemons } from '../../../actions/pokemons';
import { useQuery } from '@tanstack/react-query';
import { PokeballBg } from '../../components/ui/PokeballBg';
import { FlatList } from 'react-native-gesture-handler';
import { globalTheme } from '../../../config/theme/global-theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../../components/pokemons/PokemonCard';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const { isLoading, data: pokemons = [] } = useQuery( {
    queryKey: [ 'pokemons' ],
    queryFn: () => getPokemons( 0 ),
    staleTime: 1000 * 60 * 60, // 60 minutes
  } );

  return (
    <View style={ globalTheme.globalMargin }>
      <PokeballBg style={ styles.imgPosition } />

      {/* {
        pokemons.map( ( pokemon, index ) => (
          <Text>{ pokemon.name }</Text>
        ) )
      } */}
      <FlatList
        data={ pokemons }
        keyExtractor={ ( pokemon, index ) => `${ pokemon.id }-${ index }` }
        numColumns={ 2 }
        style={ { paddingTop: top + 20 } }
        ListHeaderComponent={ () => (
          <Text variant="displayMedium">Pokédex</Text>
        ) }
        renderItem={ ( { item } ) => <PokemonCard pokemon={ item } /> }
      />
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
