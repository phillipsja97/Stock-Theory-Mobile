import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white'
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
  logo: {
    height: '100%',
    width: 500,
    marginBottom: 10,
    backgroundColor: 'transparent'
  },
  splashTitleContainer: {
    position: 'absolute',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    color: 'white'
  },
  splashTitleText: {
    color: 'white',
    fontSize: 26,
  },
  splashButtons: {
    margin: 10
  }
});