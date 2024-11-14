/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { Alert, Platform, View } from 'react-native';
import { PlayAudioImage } from '../../components/ui/PlayAudioImage';
import { Button } from 'react-native-paper';
import Sound from 'react-native-sound';
import { Cries } from '../../../domain/entities/pokemon';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

interface Props {

  pokemonAudio: Cries;
}


export const PokemonAudioPlayer = ( { pokemonAudio }: Props ) => {
  const { isDark } = useContext( ThemeContext );

  if ( Platform.OS === 'ios' ) {
    return (
      <>
      </>
    );
  }

  const playAudio = ( url: string ) => {
    const sound = new Sound( url, null, ( error ) => {
      if ( error ) {
        Alert.alert( 'Erro', 'Não foi possível carregar o áudio' );
        return;
      }
      sound.play( ( success ) => {
        if ( !success ) {
          Alert.alert( 'Erro', 'Falha ao reproduzir o áudio' );
        }
        sound.release(); // Libera o recurso quando terminar
      } );
    } );
  };
  return (
    <View
      style={ {
        flexDirection: 'row',
        marginHorizontal: 5,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
      } }
    >
      <Button
        onPress={ () => playAudio( pokemonAudio.latest ) } >
        {/* <Text
          variant="displaySmall"
          style={ {
            color: isDark ? 'white' : 'black',
          } }
        >
          Latest</Text> */}
        <PlayAudioImage
          style={ {
            left: 10,
            borderWidth: 1,
            borderColor: isDark ? 'white' : 'black',
          } }
        />
      </Button>
      <Button
        onPress={ () => playAudio( pokemonAudio.legacy ) } >
        {/* <Text
          variant="displaySmall"
          style={ {
            color: isDark ? 'white' : 'black',
          } }
        >Legacy</Text> */}
        <PlayAudioImage
          style={ {
            borderWidth: 1,
            borderColor: isDark ? 'white' : 'black',
          } }
        />

      </Button>
    </View >
  );
};

