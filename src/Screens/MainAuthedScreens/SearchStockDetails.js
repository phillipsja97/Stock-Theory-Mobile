import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function SearchStockDetailsScreen () {
  const navigation = useNavigation();
  return (
    <React.Fragment>
      <Appbar.Header style={styles.appbar} color='#D4AF37'>
       <Appbar.BackAction onPress={() =>  navigation.goBack()} style={styles.appbar} color='#D4AF37'/>
       <Appbar.Content title="Stock Details" style={styles.appbar} color='#D4AF37'color='#D4AF37'/>
      </Appbar.Header>
      <View style={styles.container}>
        <Text>
          Searched Stock Details
        </Text>
      </View>
    </React.Fragment>
  )
}

export default SearchStockDetailsScreen;

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