import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Divider } from 'react-native-paper';
import MaterialCommunityArrow from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
// import { styles } from '../../Styles/Styles';

export default function SplashScreen () {
  const navigation = useNavigation();
  // return (
  //   <View>
  //     <Image source={{
  //           uri: 'https://www.nasdaq.com/sites/acquia.prod/files/2020/03/16/stocks-iamchamp-adobe.jpg?1991693543'
  //           }} 
  //           style={styles.logo} 
  //     />
  //     {/* <View style={styles.splashTitleContainer}>
  //       <Text style={styles.splashTitleText}>Welcome To Stock Theory</Text> */}
  //       <Animatable.View 
  //           style={[styles.footer, {
  //               backgroundColor: 'white'
  //           }]}
  //           animation="fadeInUpBig"
  //       >
  //           <View style={styles.button}>
  //               <TouchableOpacity title="signInButton" onPress={()=>navigation.navigate('SignUp')}>
  //                   <LinearGradient
  //                       colors={['#FFD700', '#998302']}
  //                       style={styles.signUpButton} //#cfb002
  //                   >
  //                       <Text style={styles.textSign}>Sign Up</Text>
  //                       {/* <MaterialIcons 
  //                           name="navigate-next"
  //                           color="#fff"
  //                           size={20}
  //                       /> */}
  //                   </LinearGradient>
  //               </TouchableOpacity>
  //           </View>
  //         </Animatable.View>
  //       </View>
  //     // </View>
  // )
  return (
<View style={styles.container}>
  <View style={styles.header}>
      <Animatable.Image 
          animation="bounceIn"
          duraton="1500"
          source={{uri: 'https://tr.rbxcdn.com/2beab43a8782b7a3b7e28090ede2a8f5/420/420/Decal/Png'}} 
          resizeMode="stretch"
          style={styles.logo}
      />
  </View>
    <Animatable.View 
        style={[styles.footer, {
            backgroundColor: 'white'
        }]}
        animation="fadeInUpBig"
    >
        <Text style={[styles.title, {
            color: 'black'
        }]}>Always stay in touch with the latest trends in the Stock Market!</Text>
        <Text style={styles.text}>Powered by Finnhub</Text>
        <View style={styles.button}>
        <TouchableOpacity onPress={()=>navigation.navigate('Auth')}>
            <LinearGradient
                colors={['#FFD700', '#d6b500']}
                style={styles.signIn}
            >
                <Text style={styles.textSign}>Get Started</Text>
                <MaterialCommunityArrow color="black" name="arrow-right" />
            </LinearGradient>
        </TouchableOpacity>
        </View>
    </Animatable.View>
</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30

  },
  logo: {
      display: 'flex',
      width: 200,
      height: 300,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 200,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 28,
      flexDirection: 'row'
  },
  textSign: {
      color: 'black',
      fontWeight: 'bold'
  }
});