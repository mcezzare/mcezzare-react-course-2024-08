/* eslint-disable react/react-in-jsx-scope */
import { View } from 'react-native';
import { ActivityIndicator, Button, Text } from 'react-native-paper';
import { getPokemons } from '../../../actions/pokemons';
import { useQuery } from '@tanstack/react-query';


export const HomeScreen = () => {
  // const [ isLoading, setIsLoading ] = useState( true );
  // const [ hasError, setHasError ] = useState( '' );
  // const [ pokemon, setPokemon ] = useState<Pokemon[]>( [] );

  const { isLoading, data = [] } = useQuery( {
    queryKey: [ 'pokemons' ], // cache key
    queryFn: () => getPokemons(
      0,

    ),
    staleTime: 1000 * 60 * 60, // 60 minutes

  } );
  // TL;DR console.log( data );

  return (
    <View>
      <Text variant="displaySmall">HomeScreen</Text>
      {
        isLoading
          ? <ActivityIndicator />
          : <Button mode="contained" onPress={ () => {
            console.log( 'Pressed' );
          } }>
            Press me
          </Button>


      }
    </View>
  );
};

