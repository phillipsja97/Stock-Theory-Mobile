import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { styles } from '../../Styles/Styles';
import { Authenticate } from '../../Store/Actions/AuthActions';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Context/AuthContext';

function Profile (props) {
  const { signOut } = React.useContext(AuthContext);

  const logOutUser = () => {
    props.Authenticate(false);
    signOut();
  }

  return (
    <View style={styles.container}>
      {
          Platform.select({
            ios:
              <Button
                title='Log Out'
                onPress={() => logOutUser()}
                
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
