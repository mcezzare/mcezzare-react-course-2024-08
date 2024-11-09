/* eslint-disable react/react-in-jsx-scope */
import 'react-native-gesture-handler';

// import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigator/StackNavigator';
// import { PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeContextProvider } from './presentation/context/ThemeContext';

// export const PokedexApp = ( { children }: PropsWithChildren ) => {
const queryClient = new QueryClient();

export const PokedexApp = () => {
  return (
    //   <PaperProvider>
    //     <NavigationContainer>
    //       <StackNavigator />
    //       {/* { children } */ }
    //     </NavigationContainer>
    //   </PaperProvider>
    // );
    <QueryClientProvider client={ queryClient }>
      <ThemeContextProvider>
        <StackNavigator />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
};
