/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import { StackScreenProps } from '@react-navigation/stack';
import { FlatList, Image, ScrollView, StyleSheet, View } from 'react-native';
import { RootStackParams } from '../../navigator/StackNavigator';
import { useQuery } from '@tanstack/react-query';
import { getPokemonById } from '../../../actions/pokemons';
import { Chip, Text } from 'react-native-paper';
import { FullScreenLoader } from '../../components/ui/FullScreenLoader';
import { Formatter } from '../../../config/helpers/formatter';
import { FadeInImage } from '../../components/ui/FadeInImage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

// extra course
import { PokemonAudioPlayer } from './PokemonAudioPlayer';
import PokemonTypeIcon from '../../components/pokemons/PokemonTypeIcon';
interface Props extends StackScreenProps<RootStackParams> { }

export const PokemonScreen = ( { route }: Props ) => {
  const { isDark } = useContext( ThemeContext );
  const { top } = useSafeAreaInsets();
  const { pokemonId } = route.params;

  const pokeballImg = isDark
    ? require( '../../../assets/pokeball-light.png' )
    : require( '../../../assets/pokeball-dark.png' );

  const { data: pokemon } = useQuery( {
    queryKey: [ 'pokemon', pokemonId ], // query cache ;)
    queryFn: () => getPokemonById( pokemonId ),
    // staleTime: 100 * 60 * 60, // 1 hour
    staleTime: 100 * 60 * 1, // 1 hour
  } );


  if ( !pokemon ) { //isLoading
    return (
      <FullScreenLoader />
    );
  }


  // console.log( pokemon );
  return (
    <ScrollView
      style={ { flex: 1, backgroundColor: pokemon.color } }
      bounces={ false }
      showsVerticalScrollIndicator={ false }>
      {/* Header Container */ }
      <View style={ styles.headerContainer }>
        {/* Nombre del Pokemon */ }
        <Text
          style={ {
            ...styles.pokemonName,
            top: top + 5,
          } }>
          { Formatter.capitalize( pokemon.name ) + '\n' }#{ pokemon.id }
        </Text>

        {/* Pokeball */ }
        <Image source={ pokeballImg } style={ styles.pokeball } />

        <FadeInImage uri={ pokemon.avatar } style={ styles.pokemonImage } />
      </View>

      <View>
        <PokemonAudioPlayer
          pokemonAudio={ pokemon.cries }
        />
      </View>

      {/* Description */ }
      <View>
        <Text style={ styles.description }>"{ pokemon.description ?? '...' }"</Text>
      </View>

      {/* Types */ }
      <Text style={ styles.subTitle }>Types</Text>
      <View
        style={ { flexDirection: 'row', marginHorizontal: 20, marginTop: 10 } }>
        {/* <Text variant='displaySmall' style={ { alignSelf: 'baseline', color: 'white' } }>Types</Text> */ }

        { pokemon.types.map( type => (
          // <Chip
          //   key={ type }
          //   mode="outlined"
          //   selectedColor="white"
          //   style={ { marginLeft: 10 } }>
          //   { type }
          // </Chip>
          <Chip
            key={ type }
            mode="outlined"
            selectedColor="white"
            style={ { marginLeft: 10 } }>
            <PokemonTypeIcon type={ type } />
          </Chip>
        ) ) }
      </View>

      {/* Sprites */ }
      <FlatList
        data={ pokemon.sprites }
        horizontal
        keyExtractor={ item => item }
        showsHorizontalScrollIndicator={ false }
        centerContent
        style={ {
          marginTop: 20,
          height: 100,
        } }
        renderItem={ ( { item } ) => (
          <FadeInImage
            uri={ item }
            style={ { width: 100, height: 100, marginHorizontal: 5 } }
          />
        ) }
      />
      <View style={ { height: 10 } } />

      {/* Abilities */ }
      <Text style={ styles.subTitle }>Abilities</Text>
      <FlatList
        data={ pokemon.abilities }
        horizontal
        keyExtractor={ item => item }
        showsHorizontalScrollIndicator={ false }
        renderItem={ ( { item } ) => (
          <Chip
            selectedColor="white"
            style={ { marginLeft: 5 } }
          >
            { Formatter.capitalize( item ) }
          </Chip>
        ) }
      />

      {/* Stats */ }
      <Text style={ styles.subTitle }>Stats</Text>

      <FlatList
        data={ pokemon.stats }
        horizontal
        keyExtractor={ item => item.name }
        showsHorizontalScrollIndicator={ false }
        renderItem={ ( { item } ) => (
          <View style={ styles.statsContainer }>
            <Text style={ { flex: 1, color: 'white', fontWeight: 'bold' } }>
              { Formatter.capitalize( item.name ) }
            </Text>
            <Text style={ { color: 'white' } }>{ item.value }</Text>
          </View>

        ) }
      />

      {/* Moves */ }
      <Text style={ styles.subTitle }>Moves</Text>

      <FlatList
        data={ pokemon.moves }
        horizontal
        keyExtractor={ item => item.name }
        showsHorizontalScrollIndicator={ false }
        renderItem={ ( { item } ) => (
          <View style={ styles.statsContainer }>
            <Text style={ { flex: 1, color: 'white', fontWeight: 'bold' } }>
              { Formatter.capitalize( item.name ) }
            </Text>
            <Text style={ { color: 'white' } }>{ item.level }</Text>
          </View>

        ) }
      />

      {/* Games */ }
      <Text style={ styles.subTitle }>Games</Text>

      <FlatList
        data={ pokemon.games }
        horizontal
        keyExtractor={ item => item }
        showsHorizontalScrollIndicator={ false }
        renderItem={ ( { item } ) => (
          <Chip
            style={ { marginLeft: 5 } }
            selectedColor="white">{ Formatter.capitalize( item ) }
          </Chip>

        ) }
      />

      <View style={ { height: 30 } } />

      {/* TODO :
          games?: string[];
          stats?: Stat[];
          abilities?: string[];
          moves?: Move[];
        */}

    </ScrollView>
  );

};




const styles = StyleSheet.create( {
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 240,
    height: 240,
    position: 'absolute',
    bottom: -40,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
  },
  description: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginHorizontal: 20,
    marginTop: 20,
    textAlign: 'center'
  },
  statsContainer: {
    flexDirection: 'column',
    marginHorizontal: 20,
    alignItems: 'center',
  },

} );
