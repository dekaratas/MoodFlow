import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import Svg, { Image } from 'react-native-svg';

import styles from './styles';

const imageSrc = require('../../assets/MoodFlowLogo.png');

const Home = () => {
  const { height, width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Svg height={height} width={width}>
          <Image
            testID="Logo"
            href={imageSrc}
            width={width}
            height={height}
            preserveAspectRatio="xMidYMin meet"
            y={height / 7.5}
          />
        </Svg>
      </View>
      <View style={styles.quoteContainer}>
        <View style={styles.quoteHeader}>
          <Text style={styles.quoteHeaderText}>
            Here is your quote of the day:
          </Text>
        </View>
        {/* <View style={styles.quote}> */}
        <Text style={styles.quoteText}>
          “It's not about what it is, it's about what it can become.” Dr. Seuss
        </Text>
        {/* </View> */}
      </View>
    </View>
  );
};

export default Home;
