import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import error from '../actions/error/error.reducer'
import auth from '../actions/auth/auth.reducer'

const rootReducer = combineReducers({
    error,
    auth,
    form: formReducer
})

export default rootReducer