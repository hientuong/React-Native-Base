import { AsyncStorage } from 'react-native';
import * as AuthReducer from './auth.reducer';
import AuthApi from './auth.api';
import { asyncError, generalError } from '../error/error.service';
import App from '../../../App';

const _saveItem = async (item, selectedValue) => {
  try {
    await AsyncStorage.setItem(item, selectedValue);
  } catch (error) {
    throw error;
  }
};

export const login = (email, password) => dispatch => {
  dispatch(AuthReducer.setAuthPending());
  return AuthApi.login(email, password)
    .then(res => {
      if (res.err === null) {
        dispatch(AuthReducer.setLogginSuccess(res.authToken, res.User));
        _saveItem('authToken', res.authToken)
          .then(resp => {
            App.startAppLoggedIn();
          })
          .catch(error => {
            dispatch(asyncError(error));
          });
      } else {
        dispatch(AuthReducer.setLogginError(res.err.code));
      }
    })
    .catch(error => {
      dispatch(generalError(error));
    });
};
