import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet } from 'react-native';

import Home from './screens/Home/Home';
import Settings from './screens/Settings/Settings';

const Tab = createBottomTabNavigator();

const CustomScreenOptions = {
  tabBarStyle: {
    width: '95%',
    backgroundColor: 'black',
    alignSelf: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tabBarActiveTintColor: '#1EAED7',
  tabBarInactiveTintColor: 'grey',
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={CustomScreenOptions}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      <StatusBar style="auto" backgroundColor="#ffffff" />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1EAED7',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
