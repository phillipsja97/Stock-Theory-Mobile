import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Authenticate, SetToken } from './src/Store/Actions/AuthActions';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
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
import StockDetails from './src/Screens/MainAuthedScreens/StockDetails';
import SearchStockDetailsScreen from './src/Screens/MainAuthedScreens/SearchStockDetails';
import SettingScreen from './src/Screens/MainAuthedScreens/Settings';

const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MainAuthedStack = createStackNavigator();
const UnAuthedStack = createStackNavigator();
const MyStocksStack = createStackNavigator();
const SearchStocksStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const AuthStore = createStore(AuthReducer);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#D4AF37',
    accent: '#f1c40f',
  },
};

function App(props) {
  const [authed, setAuthed] = useState(false);
  // const navigation = useNavigation();
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

    // useEffect(() => {
    //   navigation.addListener('login', () => {
    //     props.Authenticate(true);
    //   });
    //   navigation.addListener('logout', () => {
    //     props.Authenticate(false);
    //   })
    // });

function MyStocksScreens() {
  return (
    <MyStocksStack.Navigator>
      <MyStocksStack.Screen
          name="MyStocks"
          component={MyStocks}
          options={{
            headerShown: false,
          }}
      />
      <MyStocksStack.Screen
          name="StockDetails"
          component={StockDetails}
          options={{
            headerShown: false,
          }}
      />
    </MyStocksStack.Navigator>
  );
}

function SearchStocksScreens() {
  return (
    <SearchStocksStack.Navigator>
      <SearchStocksStack.Screen
        name="SearchStocks"
        component={SearchStocks}
        options={{
          headerShown: false,
        }}
      />
      <SearchStocksStack.Screen
        name="SearchStocksDetails"
        component={SearchStockDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </SearchStocksStack.Navigator>
  )
}

function ProfileScreens() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  )
}

  return (
      authed ?
      <PaperProvider theme={theme}>
        <AuthContext.Provider value={authContext}>
          <Provider store={AuthStore}>
            <NavigationContainer>
              <MaterialBottomTabs.Navigator
                activeColor="#D4AF37"
                inactiveColor="#A8A8A8"
                barStyle={{ backgroundColor: '#000000' }}
                >
                <MaterialBottomTabs.Screen
                name="Stocks"
                component={MyStocksScreens}
                options={{
                  tabBarLabel: 'My Stocks',
                  tabBarIcon: ({ color }) => (
                    <EntyIcons name="area-graph" color={color} size={26} />
                  ),
                }}
                />
                <MaterialBottomTabs.Screen
                name="Search"
                component={SearchStocksScreens}
                options={{
                  tabBarLabel: 'Search Stocks',
                  tabBarIcon: ({ color }) => (
                    <Ionicons name="ios-search" color={color} size={26} />
                  ),
                }}
                />
                <MaterialBottomTabs.Screen
                name="Profile"
                component={ProfileScreens}
                options={{
                  tabBarLabel: 'Profile',
                  tabBarIcon: ({ color }) => (
                    <Ionicons name="ios-person" color={color} size={26} />
                  ),
                }}
                />
              </MaterialBottomTabs.Navigator>
            </NavigationContainer>
          </Provider>
        </AuthContext.Provider>
      </PaperProvider>
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
                      name="Auth"
                      component={Auth}
                      options={{
                        headerShown: false,
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
                      name="SplashScreen"
                      component={SplashScreen}
                    />
                    <UnAuthedStack.Screen
                      name="SignUp"
                      component={SignUp}
                      options={{
                        headerShown: false,
                        headerTitle: 'Sign Up',
                        headerStyle: {
                          backgroundColor: 'black',
                        },
                        headerTitleStyle: {
                          color: '#D4AF37'
                        },
                        headerBackTitleStyle: {
                          color: '#D4AF37',
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

export default App;
