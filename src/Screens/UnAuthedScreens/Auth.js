import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Divider } from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import MaterialCommunityArrow from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput, useTheme } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Context/AuthContext';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Authenticate } from '../../Store/Actions/AuthActions';
// import { styles } from '../../Styles/Styles';

function AuthScreen (props) {
  const { signIn } = useContext(AuthContext);
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const loginUser = () => {
    if (text === 'test@gmail.com' && passwordText === 'password') {
      props.Authenticate(true);
      signIn();
    } else {
      alert('That username or password is incorrect');
    }
  }

  return (
<View style={styles.container}>
  <View style={styles.header}>
      <Animatable.Image 
          animation="bounceIn"
          duraton="1500"
          source={require('../../Assets/logo.png')}
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
      <KeyboardAwareScrollView>
        <Text style={[styles.title, {
          color: 'black'
        }]}>Always stay in touch with the latest trends in the Stock Market!</Text>
        <Text style={styles.text}>Powered by Finnhub</Text>
                  <View style={styles.inputContainer}>
                    <View style={styles.emailInput}>
                      <TextInput
                        mode="outlined"
                        theme={{ colors: { primary: '#D4AF37',underlineColor:'transparent',}}}
                        label="Username or Email"
                        value={text}
                        onChangeText={text => setText(text)}
                      />
                    </View>
                    <View style={styles.passwordInput}>
                      <TextInput
                        mode="outlined"
                        theme={{ colors: { primary: '#D4AF37',underlineColor:'transparent',}}}
                        label="Password"
                        value={passwordText}
                        secureTextEntry='true'
                        onChangeText={passwordText => setPasswordText(passwordText)}
                      />
                    </View>
                    <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                      <TouchableOpacity onPress={() => loginUser()}>
                          <LinearGradient
                              colors={['#FFD700', '#d6b500']}
                              style={styles.signIn}
                          >
                              <Text style={styles.textSign}>Login to my Account</Text>
                          </LinearGradient>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                      <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                          <LinearGradient
                              colors={['#FFF', '#DCDCDC']}
                              style={styles.signIn}
                          >
                              <Text style={styles.textSign}>Or, Sign up here</Text>
                          </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
                  </View>
                  </KeyboardAwareScrollView>
    </Animatable.View>
</View>
  )
}

const mapStateToProps = (state) => {
  const { authed } = state
  console.log(authed, 'authedInAuthComponent');
  return { authed }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    Authenticate,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40
  },
  footer: {
      flex: 2,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30

  },
  logo: {
      display: 'flex',
      width: 300,
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
  },
  loginText: {
    display: 'flex',
  },
  inputContainer: {
    display: 'flex',
    marginTop: 20,
    marginBottom: 80
  },
  loginTitle: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold',
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
  },
  secondaryText: {
      color: 'grey',
      marginTop:5
  },
  emailInput: {
    marginTop: 15
  },
  passwordInput: {
    marginTop: 15
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center'
  },
});