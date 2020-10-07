import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../../Styles/Styles';
import { useNavigation } from '@react-navigation/native';

function MyStocks () {

  return (
    <View style={styles.container}>
      <Text>My Stocks</Text>
    </View>
  )
}

export default MyStocks;