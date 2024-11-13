/* eslint-disable react/react-in-jsx-scope */
import { FlatList, View } from 'react-native';
import { globalTheme } from '../../../config/theme/global-theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ActivityIndicator, TextInput, Text } from 'react-native-paper';
import { PokemonCard } from '../../components/pokemons/PokemonCard';
import { Pokemon } from '../../../domain/entities/pokemon';

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isDark } = useContext( ThemeContext );

  const colorText = isDark ? 'white' : 'black';
  return (
    <View style={ [ globalTheme.globalMargin, { paddingTop: top } ] }>
      {/* <Text style={ { color: colorText } }>SearchScreen</Text> */ }
      <TextInput
        placeholder="Search Pokemon"
        mode="flat"
        autoFocus
        autoCorrect={ false }
        onChangeText={ value => console.log( value ) }
        value="Hello World"
        theme={ { colors: { text: colorText } } } // Define a cor do texto usando o valor de colorText
      />
      <ActivityIndicator style={ { paddingTop: 20 } } />

      <FlatList
        // data={ data?.pages.flat() ?? [] }
        data={ [] as Pokemon[] }
        keyExtractor={ ( pokemon, index ) => `${ pokemon.id }-${ index }` }
        numColumns={ 2 }
        style={ { paddingTop: top + 20 } }
        ListHeaderComponent={ () => (
          <Text variant="displayMedium" style={ {
            color: isDark ? 'white' : 'black',
          } }>Pokédex</Text>
        ) }
        renderItem={ ( { item } ) => <PokemonCard pokemon={ item } /> }
        showsVerticalScrollIndicator
      // onEndReachedThreshold={ 0.6 }
      // onEndReached={ () => fetchNextPage() }
      />

    </View>
  );
};
