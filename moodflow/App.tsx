import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Home from './screens/Home/Home';
import React from 'react';
import CheckList from './screens/CheckList/CkeckList';

export default function App() {
  return (
    <View style={styles.container}>
      <CheckList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1EAED7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
