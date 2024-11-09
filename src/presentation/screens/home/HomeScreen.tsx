/* eslint-disable react/react-in-jsx-scope */
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { getPokemons } from '../../../actions/pokemons';
export const HomeScreen = () => {


  getPokemons();



  return (
    <View>
      <Text variant="displaySmall">HomeScreen</Text>
      <Button mode="contained" onPress={ () => {
        console.log( 'Pressed' );
        getPokemons();
      } }>
        Press me
      </Button>
    </View>
  );
};

