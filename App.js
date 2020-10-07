import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EntyIcons from 'react-native-vector-icons/Entypo';
import Profile from './src/Screens/MainAuthedScreens/Profile';
import SearchStocks from './src/Screens/MainAuthedScreens/SearchStocks';
import MyStocks from './src/Screens/MainAuthedScreens/MyStocks';
import Auth from './src/Screens/UnAuthedScreens/Auth';
import SplashScreen from './src/Screens/UnAuthedScreens/SplashScreen';
import AuthReducer from './src/Store/Reducers/AuthStore';
import { AuthContext } from './src/Context/AuthContext';
import SignUp from './src/Screens/UnAuthedScreens/SignUp';

const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MainAuthedStack = createStackNavigator();
const UnAuthedStack = createStackNavigator();

const AuthStore = createStore(AuthReducer);

export default function App() {
  const [authed, setAuthed] = useState(false);
  // console.log(authed, 'authedINAPP');
    const authContext = React.useMemo(() => {
      return {
        signIn: () => {
          setAuthed(true);
        },
        signOut: () => {
          setAuthed(false);
        }
      };
    }, []);

  console.log(AuthStore.getState().authed, 'authedFromStore');

  createBottomTabs = () => {
    return <MaterialBottomTabs.Navigator
              activeColor="#D4AF37"
              inactiveColor="#A8A8A8"
              barStyle={{ backgroundColor: '#000000' }}
              >
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
    </MaterialBottomTabs.Navigator>
  }

  // const setAuthedInAuth = () => {
  //   setAuthed(true);
  // }

  return (
      authed ?
      <AuthContext.Provider value={authContext}>
        <Provider store={AuthStore}>
          <NavigationContainer>
              <MainAuthedStack.Navigator
                screenOptions={{
                      headerStyle: { backgroundColor: '#000000'},
                      headerTintColor: '#D4AF37',
                }}>
                    <MainAuthedStack.Screen name="ProfileStack"
                    children={createBottomTabs}
                    options={{
                      title: "Stock Theory",
                    }}
                    />
              </MainAuthedStack.Navigator>
          </NavigationContainer>
        </Provider>
      </AuthContext.Provider>
      :
      <React.Fragment>
        <AuthContext.Provider value={authContext}>
          <Provider store={AuthStore}>
            <NavigationContainer>
                <UnAuthedStack.Navigator
                screenOptions={{
                  headerShown: false,
                }}
                >
                    <UnAuthedStack.Screen
                      name="SplashScreen"
                      component={SplashScreen}
                    />
                    <UnAuthedStack.Screen
                      name="Auth"
                      component={Auth}
                      options={{
                        headerShown: true,
                        headerTitle: 'Sign In',
                        headerStyle: {
                          backgroundColor: 'black',
                        },
                        headerTitleStyle: {
                          color: '#D4AF37'
                        }
                      }}
                    />
                    <UnAuthedStack.Screen
                      name="SignUp"
                      component={SignUp}
                      options={{
                        headerShown: true,
                        headerTitle: 'Sign Up',
                        headerStyle: {
                          backgroundColor: 'black',
                        },
                        headerTitleStyle: {
                          color: '#D4AF37'
                        }
                      }}
                    />
                </UnAuthedStack.Navigator>
            </NavigationContainer>
          </Provider>
        </AuthContext.Provider>
      </React.Fragment>
  );
}
