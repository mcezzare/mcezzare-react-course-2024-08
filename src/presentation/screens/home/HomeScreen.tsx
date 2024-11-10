/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, View } from 'react-native';
import { getPokemons } from '../../../actions/pokemons';
import { useQuery } from '@tanstack/react-query';
import { PokeballBg } from '../../components/ui/PokeballBg';


export const HomeScreen = () => {

  const { isLoading, data = [] } = useQuery( {
    queryKey: [ 'pokemons' ], // cache key
    queryFn: () => getPokemons( 0 ),
    staleTime: 1000 * 60 * 60, // 60 minutes

  } );

  return (
    <View>
      {/* <Text variant="displaySmall"></Text> */ }
      <PokeballBg style={ styles.imgPosition } />
    </View>
  );
};

const styles = StyleSheet.create( {
  imgPosition: {
    position: 'absolute',
    top: -100,
    right: -100,
  }
} );