import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import StartButton from './src/components/StartButton/StartButton';
import Responsive from 'react-native-lightweight-responsive';
import colors from './src/assets/colors/colors';

const App = () => {
  const [isTesting, setIsTesting] = useState(false);

  const initiate = () => {
    setIsTesting(!isTesting);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{ `ZapTest` }</Text>
      <StartButton initiate={initiate} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.midnight,
    alignItems: 'center',
    paddingTop: Responsive.height(155)
  },
  heading: {
    color: '#fff',
    fontSize: 34,
    paddingBottom: 0,
  }
});

export default App;
