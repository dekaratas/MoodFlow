import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

const imageSrc = require('../../assets/MoodFlowLogo.png');

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={imageSrc} style={styles.logo} />
      <StatusBar backgroundColor="#FFFFFF" />
      <Text style={styles.homeText}>I am the styled HomeScreen!</Text>
    </View>
  );
};

export default Home;
