import React, { Component } from 'react';
import { connect } from 'react-redux';
import { styles } from '../../Styles/Styles';
import { bindActionCreators } from 'redux';
import { Text, View, Button } from 'react-native';
import { Authenticate } from '../../Store/Actions/AuthActions';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigation } from '@react-navigation/native';

function AuthScreen (props) {
  const { signIn } = React.useContext(AuthContext)
  const navigation = useNavigation();
  console.log(navigation, 'navigation');
  console.log(props, 'props');

  const loginUser = () => {
    props.Authenticate(true);
    signIn();
  }


  return (
    <View style={styles.container}>
       {
          Platform.select({
            ios:
              <Button
                title='Log In'
                onPress={() => loginUser()}
                
              />,
            android:
              <TouchableOpacity
                onPress={() => alert('You have Logged In')}>
                <Text style={styles.androidLink}>Log In</Text>
              </TouchableOpacity>
          })
        }
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