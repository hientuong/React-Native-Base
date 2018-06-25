// Actions
export const setAuthPending = () => {
    return {
        type: 'SET_AUTH_PENDING'
    }
}

export const setLogginSuccess = (authToken, user) => {
    return {
        type: 'SET_LOGGIN_SUCCESS',
        authToken,
        user
    }
}

export const setLogginError = error => {
    return {
        type: 'SET_LOGGIN_ERROR',
        error
    }
}

export const setLogout = () => {
    return {
        type: 'SET_LOGOUT'
    }
}

export const saveAppToken = authToken => {
    return {
        type: 'SAVE_APP_TOKEN',
        authToken
    }
}

// Reducer

let initialState = {
    authPending: false,
    loggedIn: false,
    logginError: false,
    authToken: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_AUTH_PENDING':
            return {
                ...state,
                authPending: true
            }

        case 'SET_LOGIN_SUCCESS':
            return {
                ...state,
                authPending: false,
                loggedIn: true,
                logginError: false,
                authToken: action.authToken
            }

        case 'SET_LOGIN_ERROR': {
            return {
                ...state,
                authPending: false,
                loggedIn: false,
                logginError: action.error
            }
        }

        case 'SET_LOGOUT': {
            return {
                ...state,
                authToken: null,
                loggedIn: false
            }
        }

        case 'SAVE_APP_TOKEN': {
            return {
                ...state,
                authToken: action.authToken
            }
        }

        default:
            return state
    }
}