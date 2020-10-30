import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Divider } from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import MaterialCommunityArrow from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput, useTheme, Button } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Context/AuthContext';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Authenticate, SetToken, SetUser } from '../../Store/Actions/AuthActions';
import authData from '../../Data/UserData';

function AuthScreen (props) {
  const { signIn } = useContext(AuthContext);
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const loginUser = () => {
    let token = '';
    const user = {
      email: text,
      password: passwordText
    };
    authData.loginUser(user)
      .then((result) => {
        props.SetToken(result.data.token);
        token = result.data.token;
        SetToken(result.data.token);
        if (token !== '') {
          authData.getUser(token)
            .then((response) => {
              const user = {
                email: response.data.email,
                username: response.data.username
              };
              props.SetUser(user);
              props.Authenticate(true);
              signIn();
            })
       }
      })
      .catch((error) => console.error(error));
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
                        secureTextEntry={true}
                        onChangeText={passwordText => setPasswordText(passwordText)}
                      />
                    </View>
                    <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                    <Button mode="contained"
                      onPress={loginUser}
                      color='#D4AF37'
                      style={styles.insideButton}
                      >
                        Create My Account
                      </Button>
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
  const { authed, token, user } = state
  return { authed, token, user }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    Authenticate,
    SetToken,
    SetUser
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
  insideButton: {
    padding: 8
  }
});