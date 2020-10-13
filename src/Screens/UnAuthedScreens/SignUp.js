import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Switch, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Divider, Appbar } from 'react-native-paper';
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

function SignUp (props) {
  const { signIn } = useContext(AuthContext);
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const loginUser = () => {
    if (emailText === 'test@gmail.com' && passwordText === 'password' && isEnabled) {
      props.Authenticate(true);
      signIn();
    } else {
      alert('That username or password is incorrect');
    }
  }

  return (
<React.Fragment>
    <Appbar.Header style={styles.appbar} color='#D4AF37'>
       <Appbar.BackAction onPress={() =>  navigation.goBack()} style={styles.appbar} color='#D4AF37'/>
       <Appbar.Content title="Sign Up" style={styles.appbar} color='#D4AF37'color='#D4AF37'/>
    </Appbar.Header>
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
                  <View style={styles.inputContainer}>
                      <View style={styles.emailInput}>
                        <TextInput
                        mode="outlined"
                        theme={{ colors: { primary: '#D4AF37',underlineColor:'transparent',}}}
                        label="Name"
                        value={text}
                        onChangeText={text => setText(text)}
                        />
                      </View>
                    <View style={styles.emailInput}>
                      <TextInput
                        mode="outlined"
                        theme={{ colors: { primary: '#D4AF37',underlineColor:'transparent',}}}
                        label="Email Address"
                        value={emailText}
                        onChangeText={emailText => setEmailText(emailText)}
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
                    {
                      Platform.select({
                        ios: <View style={styles.checkboxContainer}>
                                <Switch
                                  trackColor={{ false: "#767577", true: "#D4AF37" }}
                                  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                  ios_backgroundColor="#3e3e3e"
                                  onValueChange={toggleSwitch}
                                  value={isEnabled}
                                />
                                <Text style={styles.label}>I agree to the terms and conditions</Text>
                              </View>,
                        android: <View style={styles.checkboxContainer}>
                                    <Switch
                                      trackColor={{ false: "#767577", true: "#D4AF37" }}
                                      thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                      ios_backgroundColor="#3e3e3e" // may need to use something other than switch
                                      onValueChange={toggleSwitch}
                                      value={isEnabled}
                                    />
                                  <Text style={styles.label}>I agree to the terms and conditions</Text>
                                </View>
                      })
                    }
                    <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                      <TouchableOpacity onPress={() => loginUser()}>
                          <LinearGradient
                              colors={['#FFD700', '#d6b500']}
                              style={styles.signIn}
                          >
                              <Text style={styles.textSign}>Create my Account</Text>
                          </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
                  </View>
                  </KeyboardAwareScrollView> 
    </Animatable.View>
  </View>
</React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);


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
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30,
      width: '90%'
  },
  logo: {
      display: 'flex',
      width: 200,
      height: 200,
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
    marginBottom: 80,
//     width: '90%',
//     marginTop: 40,
//     marginBottom: 40,
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     borderBottomRightRadius: 30,
//     borderBottomLeftRadius: 30
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
  textTitle: {
    color: '#D4AF37',
    fontSize: 30
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 10,
    justifyContent: 'center'
  },
  checkbox: {
    alignSelf: "center",
    height: 20,
    width: 20
  },
  label: {
    margin: 8,
  },
  appbar: {
    backgroundColor: 'black',
    color: '#D4AF37'
  }
});