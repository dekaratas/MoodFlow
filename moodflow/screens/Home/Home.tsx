import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const Home = () => {
  return (
    <View>
      <StatusBar backgroundColor="#FFFFFF" />
      <Text style={styles.homeText}>I am the styled HomeScreen!</Text>
    </View>
  );
};

export default Home;
