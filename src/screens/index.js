import { Navigation } from 'react-native-navigation';
import Home from './Home';
import Login from './Login';
import Words from './Words';
import Courses from './Courses';
import Books from './Books';
import Video from './Video';
import Settings from './Settings';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('Home', () => Home, store, Provider);
  Navigation.registerComponent('Login', () => Login, store, Provider);
  Navigation.registerComponent('Words', () => Words, store, Provider);
  Navigation.registerComponent('Courses', () => Courses, store, Provider);
  Navigation.registerComponent('Books', () => Books, store, Provider);
  Navigation.registerComponent('Video', () => Video, store, Provider);
  Navigation.registerComponent('Settings', () => Settings, store, Provider);
}
