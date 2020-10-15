import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function MyStocks () {
  const navigation = useNavigation();
  return (
    <React.Fragment>
    <Appbar.Header style={styles.appbar}>
       <Appbar.Content title="My Stocks" style={styles.appbar} color='#D4AF37'color='#D4AF37'/>
    </Appbar.Header>
    <View style={styles.container}>
     {
          Platform.select({
            ios:
              <Button
                title='Stock Details'
                onPress={() => navigation.navigate('StockDetails')}     
              />,
            android:
              <TouchableOpacity
                onPress={() => alert('You have Logged In')}>
                <Text style={styles.androidLink}>Log In</Text>
              </TouchableOpacity>
          })
      }
    </View>
    </React.Fragment>
  )
}

export default MyStocks;

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: 'black',
    color: '#D4AF37'
  },
  androidLink: {
    color: 'blue'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});