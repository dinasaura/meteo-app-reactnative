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
import CityScreen from './src/screens/City';
import HomeScreen from './src/screens/Home';
import FavoritesScreen from './src/screens/Favorites';
import FavoriteProvider from './src/providers/FavoriteProvider';
import HomeIcon from './src/icons/HomeIcon';
import FavoriteIcon from './src/icons/FavoriteIcon';

enableScreens();

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabsParamList>();

export const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} backBehavior="history">
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{tabBarIcon: HomeIcon, title: 'Casa'}}
      />
      <Tab.Screen
        name="favorites"
        component={FavoritesScreen}
        options={{tabBarIcon: FavoriteIcon, title: 'Favorite'}}
      />
    </Tab.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <FavoriteProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen
              name="tabs"
              options={{title: 'Principale'}}
              component={MainTabs}
            />
            <Stack.Screen
              options={({route}) => ({
                headerShown: true,
                title: `Detaglio ${route.params.name}`,
              })}
              name="city"
              component={CityScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteProvider>
    </SafeAreaProvider>
  );
}

export default App;
