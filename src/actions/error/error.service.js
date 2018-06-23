import { AsyncStorage } from 'react-native'
import { asyncError, connectionError } from './error.reducer'
import config from '../../utils/config'
import App, { store } from '../../../'

export const handleTokenErrors = response => {
    if(!response.success){
        if(response.code && response.code === 'invalidToken'){
            store.dispatch({type: 'INVALID_TOKEN'})
        } else if (response.code && response.code === 'refreshExpired'){
            store.dispatch({type: 'REFRESH_EXPIRED'})
            store.dispatch(connectionError('Refresh token expired'))
        }
    }
}

// general errors are for non-request specific problems that can occur with
// many requests, such as network errors and app specific, general errors
export const generalError = response => {
    if(response = 'TypeError: Network request failed') {
        return store.dispatch(connectionError('Network request failed'))
        // other checks for collection issues
    } else {
        // generic error
    }
}