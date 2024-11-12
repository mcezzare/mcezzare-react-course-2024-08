import React, { useEffect } from 'react';
import TrackPlayer from 'react-native-track-player';
import { View, Button } from 'react-native';

const PokemonAudioPlayer = ( { pokemonAudio } ) => {
  useEffect( () => {
    TrackPlayer.setupPlayer().then( async () => {
      await TrackPlayer.add( {
        id: 'latest-audio',
        url: pokemonAudio.latest,
        title: 'Pokemon Latest Audio',
      } );
    } );

    return () => {
      TrackPlayer.destroy(); // Libera o player ao desmontar
    };
  }, [ pokemonAudio ] );

  const playAudio = async () => {
    await TrackPlayer.play();
  };

  const stopAudio = async () => {
    await TrackPlayer.stop();
  };

  return (
    <View>
      <Button title="Tocar Áudio Latest" onPress={ playAudio } />
      <Button title="Parar Áudio" onPress={ stopAudio } />
    </View>
  );
};

export default PokemonAudioPlayer;
