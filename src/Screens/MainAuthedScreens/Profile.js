import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Appbar } from 'react-native-paper';
import { Authenticate, SetUser, SetToken } from '../../Store/Actions/AuthActions';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Context/AuthContext';

function Profile (props) {
  const { signOut } = React.useContext(AuthContext);
  const navigation = useNavigation();
  console.log(props.authed, 'authedInProfile');
  console.log(props.user, 'userInProfile');

  const logOutUser = () => {
    props.Authenticate(false);
    signOut();
  }

  return (
    <React.Fragment>
      <Appbar.Header style={styles.appbar} color='#D4AF37'>
          <Appbar.Content title="Settings" style={styles.appbar} color='#D4AF37'color='#D4AF37'/>
          <Appbar.Action onPress={() =>  navigation.navigate('Settings')} style={styles.appbar} color='#D4AF37' icon="cogs"/>
      </Appbar.Header>
        <View style={styles.container}>
          {
              Platform.select({
                ios:
                <React.Fragment>
                  <Button
                    title='Log Out'
                    onPress={() => logOutUser()}
                  />
                  <Text>{props.user.username}</Text>
                </React.Fragment>,
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

const mapStateToProps = (state) => {
  const { authed, token, user } = state
  return { authed, token, user }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    Authenticate,
    SetUser,
    SetToken
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

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
