import React from 'react';
import { Text, View } from 'react-native';

import homeText from './styles';
import Chart from '../../components/chart/chart';

const Home = () => {
  return (
    <View>
      <Text style={homeText.homeText}>I am the styled HomeScreen!</Text>
      <Chart/>
    </View>
  );
};

export default Home;
