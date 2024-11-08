import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigator/StackNavigator';

// export const PokedexApp = ( { children }: PropsWithChildren ) => {
export const PokedexApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
      {/* { children } */ }
    </NavigationContainer>

  );
};
