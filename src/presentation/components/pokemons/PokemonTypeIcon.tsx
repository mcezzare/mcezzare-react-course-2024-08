import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface PokemonTypeIconProps {
  type: string;
}

const typeIcons: { [ key: string ]: any; } = {
  bug: require( '../../../assets/icons/types/bug.svg' ),
  dark: require( '../../../assets/icons/types/dark.svg' ),
  dragon: require( '../../../assets/icons/types/dragon.svg' ),
  electric: require( '../../../assets/icons/types/electric.svg' ),
  fairy: require( '../../../assets/icons/types/fairy.svg' ),
  fighting: require( '../../../assets/icons/types/fighting.svg' ),
  fire: require( '../../../assets/icons/types/fire.svg' ),
  flying: require( '../../../assets/icons/types/flying.svg' ),
  ghost: require( '../../../assets/icons/types/ghost.svg' ),
  grass: require( '../../../assets/icons/types/grass.svg' ),
  ground: require( '../../../assets/icons/types/ground.svg' ),
  ice: require( '../../../assets/icons/types/ice.svg' ),
  normal: require( '../../../assets/icons/types/normal.svg' ),
  poison: require( '../../../assets/icons/types/poison.svg' ),
  psychic: require( '../../../assets/icons/types/psychic.svg' ),
  rock: require( '../../../assets/icons/types/rock.svg' ),
  steel: require( '../../../assets/icons/types/steel.svg' ),
  water: require( '../../../assets/icons/types/water.svg' ),
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
