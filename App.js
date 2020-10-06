import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EntyIcons from 'react-native-vector-icons/Entypo';
import Profile from './src/Screens/Profile';
import SearchStocks from './src/Screens/SearchStocks';
import MyStocks from './src/Screens/MyStocks';

const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MainAuthedStack = createStackNavigator();

export default function App() {

  createBottomTabs = () => {
    return <MaterialBottomTabs.Navigator
              activeColor="#D4AF37"
              inactiveColor="#A8A8A8"
              barStyle={{ backgroundColor: '#000000' }}
              >
              <MaterialBottomTabs.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                  <Ionicons name="ios-person" color={color} size={26} />
                ),
              }}
              />
              <MaterialBottomTabs.Screen
              name="Stocks"
              component={MyStocks}
              options={{
                tabBarLabel: 'My Stocks',
                tabBarIcon: ({ color }) => (
                  <EntyIcons name="area-graph" color={color} size={26} />
                ),
              }}
              />
              <MaterialBottomTabs.Screen
              name="Search"
              component={SearchStocks}
              options={{
                tabBarLabel: 'Search Stocks',
                tabBarIcon: ({ color }) => (
                  <Ionicons name="ios-search" color={color} size={26} />
                ),
              }}
              />
    </MaterialBottomTabs.Navigator>
  }

  return (
    <NavigationContainer>
      <MainAuthedStack.Navigator
        screenOptions={{
              headerStyle: { backgroundColor: '#000000'},
              headerTintColor: 'white',
        }}>
            <MainAuthedStack.Screen name="ProfileStack"
            children={createBottomTabs}
            options={{
              title: "Stock Theory",
            }}
            />
      </MainAuthedStack.Navigator>
    </NavigationContainer>
  );
}
