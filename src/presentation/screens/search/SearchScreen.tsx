/* eslint-disable react/react-in-jsx-scope */
import { FlatList, View } from 'react-native';
import { globalTheme } from '../../../config/theme/global-theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext, useMemo, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ActivityIndicator, TextInput, Text } from 'react-native-paper';
import { PokemonCard } from '../../components/pokemons/PokemonCard';
import { Pokemon } from '../../../domain/entities/pokemon';
import { useQuery } from '@tanstack/react-query';
import { getGetPokemonsWithNamesId } from '../../../actions/pokemons';

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isDark } = useContext( ThemeContext );

  const colorText = isDark ? 'white' : 'black';
  const [ term, setTerm ] = useState( '' );

  const { isLoading, data: pokemonNameList = [] } = useQuery( {
    queryKey: [ 'pokemons', 'all' ],
    queryFn: () => getGetPokemonsWithNamesId(),
  } );

  //console.log( pokemonNameList );

  // Todo: aplicar debounce1
  const pokemonNameIdList = useMemo( () => {

    // its a number
    if ( !isNaN( Number( term ) ) ) {
      const pokemon = pokemonNameList.find( pokemon => pokemon.id === Number( term ) );
      return pokemon ? [ pokemon ] : [];
    }

    if ( term.length === 0 ) { return []; }
    if ( term.length < 3 ) { return []; }

    const test = pokemonNameList.filter( pokemon =>
      pokemon.name.toLocaleLowerCase().includes( term.toLocaleLowerCase() ),
    );

    console.log( test );
    return test;


  }, [ term ] );



  return (
    <View style={ [ globalTheme.globalMargin, { paddingTop: top } ] }>
      {/* <Text style={ { color: colorText } }>SearchScreen</Text> */ }
      <TextInput
        placeholder="Search Pokemon"
        mode="flat"
        autoFocus
        autoCorrect={ false }
        onChangeText={ setTerm }
        value={ term }
        theme={ { colors: { text: colorText } } } // Define a cor do texto usando o valor de colorText
      />
      <ActivityIndicator style={ { paddingTop: 20 } } />

      <Text style={ { color: colorText } }>
        { JSON.stringify( pokemonNameIdList, null, 2 ) }
      </Text>


      {/* <FlatList
        // data={ data?.pages.flat() ?? [] }
        data={ [] as Pokemon[] }
        keyExtractor={ ( pokemon, index ) => `${ pokemon.id }-${ index }` }
        numColumns={ 2 }
        renderItem={ ( { item } ) => <PokemonCard pokemon={ item } /> }
        showsVerticalScrollIndicator
      // onEndReachedThreshold={ 0.6 }
      // onEndReached={ () => fetchNextPage() }
      /> */}

    </View>
  );
};
