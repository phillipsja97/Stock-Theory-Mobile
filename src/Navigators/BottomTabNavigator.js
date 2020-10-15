import React from 'react';

export default createBottomTabs = () => {
  return (
          <MaterialBottomTabs.Navigator
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
  )
}