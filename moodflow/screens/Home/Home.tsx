import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import Svg, { Image } from 'react-native-svg';

import styles from './styles';

const imageSrc = require('../../assets/MoodFlowLogo.png');

const Home = () => {
  const { height, width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Svg height={height} width={width}>
        <Image
          href={imageSrc}
          width={width}
          height={height}
          preserveAspectRatio="xMidYMin meet"
          y={height / 6}
        />
      </Svg>
      <View style={styles.quoteHeader}>
        <Text style={styles.quoteHeaderText}>
          Here is your quote of the day:
        </Text>
      </View>
    </View>
  );
};

export default Home;
