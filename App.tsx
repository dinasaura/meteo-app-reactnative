/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainTabsParamList, RootStackParamList} from './src/types';
import SearchScreen from './src/screens/Search';
import CityScreen from './src/screens/City';
import HomeScreen from './src/screens/Home';
import FavoritesScreen from './src/screens/Favorites';

enableScreens();

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabsParamList>();

export const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} backBehavior="history">
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="tabs" component={MainTabs} />
          <Stack.Screen name="city" component={CityScreen} />
          <Stack.Screen
            name="search"
            options={{presentation: 'modal'}}
            component={SearchScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;