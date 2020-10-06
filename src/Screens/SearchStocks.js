import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../Styles/Styles';
import { useNavigation } from '@react-navigation/native';

function SearchStocks () {

  return (
    <View style={styles.container}>
      <Text>Search Stocks</Text>
    </View>
  )
}

export default SearchStocks;