import { View, Text } from 'react-native';
import { Pokemon } from '../../../domain/entities/pokemon';


interface Props {
  pokemon: Pokemon;
}


export const PokemonCard = ( { pokemon }: Props ) => {
  return (
    <View>
      <Text style={ { fontSize: 30 } }>{ pokemon.avatar }</Text>
    </View>
  );
};