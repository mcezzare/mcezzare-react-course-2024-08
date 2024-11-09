/* eslint-disable react/react-in-jsx-scope */
import { View } from 'react-native';
import { ActivityIndicator, Button, Text } from 'react-native-paper';
import { getPokemons } from '../../../actions/pokemons';
import { Pokemon } from '../../../domain/entities/pokemon';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';



export const HomeScreen = () => {
  // const [ isLoading, setIsLoading ] = useState( true );
  // const [ hasError, setHasError ] = useState( '' );
  // const [ pokemon, setPokemon ] = useState<Pokemon[]>( [] );

  const { isLoading, data, isError } = useQuery( {
    queryKey: [ 'pokemons' ], // cache key
    queryFn: () => getPokemons(),
    staleTime: 1000 * 60 * 60, // 60 minutes

  } );
  console.log( isError );

  return (
    <View>
      <Text variant="displaySmall">HomeScreen</Text>
      {
        isLoading
          ? <ActivityIndicator />
          : <Button mode="contained" onPress={ () => {
            console.log( 'Pressed' );
            // getPokemons();
          } }>
            Press me
          </Button>


      }
    </View>
  );
};

