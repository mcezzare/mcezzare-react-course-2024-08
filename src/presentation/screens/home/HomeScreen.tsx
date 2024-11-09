import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
export const HomeScreen = () => {
  return (
    <View>
      <Text style={ { fontSize: 30 } }>HomeScreen</Text>
      <Button mode="contained" onPress={ () => console.log( 'Pressed' ) }>
        Press me
      </Button>
    </View>
  );
};

