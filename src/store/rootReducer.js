import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import error from '../actions/error/error.reducer'

const rootReducer = combineReducers({
    error,
    form: formReducer
})

export default rootReducer