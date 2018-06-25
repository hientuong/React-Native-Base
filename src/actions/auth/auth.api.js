import axios from 'axios'
import config from '../../utils/config'
import { handleTokenErrors } from '../error/error.service'

class AuthApi {
    static login(email, password) {
        return axios.post('http://minder.vn/api//users/signin', 
        {
            params: { email: email, password: password }
        })
            .then(response => response.json())
            .then(handleTokenErrors)
            .catch(error => {
                console.log('error: ', JSON.stringify(error))
                throw error
            })
    }
}

export default AuthApi