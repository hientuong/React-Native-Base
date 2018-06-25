import { AsyncStorage } from 'react-native'
import * as AuthReducer from './auth.reducer'
import AuthApi from './auth.api'
import { generalError } from '../error/error.service';

const _saveItem = async(item, selectedValue) => {
    try {
        await AsyncStorage.setItem(item, selectedValue)
    } catch (error) {
        throw error
    }
}

export const login = (email, password) => dispatch => {
    dispatch(AuthReducer.setAuthPending())

    return AuthApi.login(email, password)
        .then(response => {
            console.log('response: ', JSON.stringify(response))
        })
        .catch(error => {
            console('ERROR: ', error)
            dispatch(generalError(error))
        })
}