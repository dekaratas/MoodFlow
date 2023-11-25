import React from 'react';
import { Text, View } from 'react-native';

import homeText from './styles';

const Home = () => {
  return (
    <View>
      <Text style={homeText.homeText}>I am the styled HomeScreen!</Text>
    </View>
  );
};

export default Home;
