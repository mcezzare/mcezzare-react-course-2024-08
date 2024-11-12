/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { useContext } from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';


interface Props {
  style?: StyleProp<ImageStyle>;
}



export const PlayAudioImage = ( { style }: Props ) => {

  const { isDark } = useContext( ThemeContext );
  console.log( isDark );
  const AudioIconImage = require( '../../../assets/audio-play.png' );

  return (
    <Image
      source={ AudioIconImage }
      style={ [
        {
          width: 30,
          height: 30,
          opacity: 0.7,
        },
        style,
      ] }
    />
  );
};
