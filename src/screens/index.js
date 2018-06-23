import { Navigation } from 'react-native-navigation';
import Home from './Home';
import Login from './Login';

export function registerScreens(store, Provider) {
	Navigation.registerComponent('Home', () => Home, store, Provider)
	Navigation.registerComponent('Login', () => Login, store, Provider)
}
