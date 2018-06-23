import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './src/screens';

import configureStore from './src/store/configureStore';
import Home from './src/screens/Home'

import { defaultNavigator, defaultTabs } from './src/utils/style';

export const store = configureStore();
registerScreens(store, Provider);

const navigatorStyle = {
	navBarTranslucent: true,
	drawUnderNavBar: false,
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	statusBarTextColorScheme: 'light',
	drawUnderTabBar: false
};

class App extends Component {
	constructor(props) {
		super(props);
		//check logged in status before starting app...
		//dispatch action so thunk can be used to update state when login is successfull
		//mapStateToProps not working on this page as it's the root of the app
		// store.dispatch(checkAuthStatus()).then(loggedIn => {
    App.startApp();
  }

  // render() {
  //   return <Home />
  // }

	static startApp() {
		Navigation.startSingleScreenApp({
			screen: {
				screen: 'Home',
				title: 'Welcome',
				navigatorStyle: {
					...defaultNavigator,
					statusBarTextColorScheme: 'light'
				},
				navigatorButtons: {}
			},
			passProps: {},
			animationType: 'slide-down'
		});
	}
}
export default App;
