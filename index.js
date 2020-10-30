import { registerRootComponent } from 'expo';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Authenticate, SetToken } from './src/Store/Actions/AuthActions';
import { createStore } from 'redux';
import AuthReducer from './src/Store/Reducers/AuthStore';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
// const Root = () => (
//   <Provider store={AuthStore}>
//     <App />
//   </Provider>
// )

export default registerRootComponent(App);
