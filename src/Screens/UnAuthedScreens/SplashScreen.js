import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../Styles/Styles';

export default function SplashScreen () {
  const navigation = useNavigation();
  return (
    <View>
      <Image source={{
            uri: 'https://www.nasdaq.com/sites/acquia.prod/files/2020/03/16/stocks-iamchamp-adobe.jpg?1991693543'
            }} 
            style={styles.logo} 
      />
      <View style={styles.splashTitleContainer}>
        <Text style={styles.splashTitleText}>Welcome To Stock Theory</Text>
        <Button
          style={styles.splashButtons}
          icon="pencil-circle-outline"
          mode="contained"
          color="white"
          onPress={() => navigation.navigate('SignUp')}>
            Sign Up
        </Button>
        <Divider />
        <Text style={styles.text}>or</Text>
        <Button
          style={styles.splashButtons}
          icon="account-box-outline"
          mode="contained"
          color="white"
          onPress={() => navigation.navigate('Auth')}>
            Sign In
        </Button>
      </View>
    </View>
  )
}