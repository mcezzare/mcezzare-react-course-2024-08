import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface PokemonTypeIconProps {
  type: string;
}

const typeIcons: { [ key: string ]: any; } = {
  bug: require( '../../../assets/icons/types/bug.png' ),
  dark: require( '../../../assets/icons/types/dark.png' ),
  dragon: require( '../../../assets/icons/types/dragon.png' ),
  electric: require( '../../../assets/icons/types/electric.png' ),
  fairy: require( '../../../assets/icons/types/fairy.png' ),
  fighting: require( '../../../assets/icons/types/fighting.png' ),
  fire: require( '../../../assets/icons/types/fire.png' ),
  flying: require( '../../../assets/icons/types/flying.png' ),
  ghost: require( '../../../assets/icons/types/ghost.png' ),
  grass: require( '../../../assets/icons/types/grass.png' ),
  ground: require( '../../../assets/icons/types/ground.png' ),
  ice: require( '../../../assets/icons/types/ice.png' ),
  normal: require( '../../../assets/icons/types/normal.png' ),
  poison: require( '../../../assets/icons/types/poison.png' ),
  psychic: require( '../../../assets/icons/types/psychic.png' ),
  rock: require( '../../../assets/icons/types/rock.png' ),
  steel: require( '../../../assets/icons/types/steel.png' ),
  water: require( '../../../assets/icons/types/water.png' ),
};

const PokemonTypeIcon: React.FC<PokemonTypeIconProps> = ( { type } ) => {
  const iconSource = typeIcons[ type ];
  console.log( iconSource );
  return (
    <View style={ styles.typeContainer }>
      { iconSource && <Image source={ iconSource } style={ styles.icon } /> }
      <Text style={ styles.typeText }>{ type }</Text>
    </View>
  );
};

const styles = StyleSheet.create( {
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 5,
  },
  typeText: {
    color: 'white',
  },
} );

export default PokemonTypeIcon;
