import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import colors from '../../assets/colors/colors';
import Responsive from 'react-native-lightweight-responsive';

const StartButton = ({ initiate }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={initiate}>
        <Image style={styles.bolt} resizeMode="contain" source={require('../../assets/icons/bolt.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white'
  },
  button: {
    backgroundColor: colors.beluga,
    width: 179,
    height: 179,
    borderRadius: 179 / 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: 30
  },
  bolt: {
    height: 53
  }
});

export default StartButton;
