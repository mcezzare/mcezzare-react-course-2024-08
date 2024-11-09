/* eslint-disable react/react-in-jsx-scope */
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigator/StackNavigator';
import { PaperProvider } from 'react-native-paper';

// export const PokedexApp = ( { children }: PropsWithChildren ) => {
export const PokedexApp = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackNavigator />
        {/* { children } */ }
      </NavigationContainer>
    </PaperProvider>
  );
};
