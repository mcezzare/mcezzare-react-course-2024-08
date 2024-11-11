import { StackScreenProps } from '@react-navigation/stack';
import { View } from 'react-native';
import { RootStackParams } from '../../navigator/StackNavigator';
import { useQuery } from '@tanstack/react-query';
import { getPokemonById } from '../../../actions/pokemons';
import { Text } from 'react-native-paper';

interface Props extends StackScreenProps<RootStackParams> { }

export const PokemonScreen = ( { navigation, route }: Props ) => {

  const { pokemonId } = route.params;

  const { isLoading, data: pokemon } = useQuery( {
    queryKey: [ 'pokemon', pokemonId ],
    queryFn: () => getPokemonById( pokemonId ),
    staleTime: 100 * 60 * 60, // 1 hour
  } );





  return (
    <View>
      <Text variant="displaySmall">{ pokemon?.name }</Text>

    </View>
  );
};