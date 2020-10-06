import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../Styles/Styles';
import { useNavigation } from '@react-navigation/native';

function Profile () {

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile;